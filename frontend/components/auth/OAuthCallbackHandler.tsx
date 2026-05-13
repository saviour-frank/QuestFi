'use client'

import { useEffect } from 'react'
import axios from 'axios'

export function OAuthCallbackHandler() {
  useEffect(() => {
    const handleGoogleCallback = async () => {
      // Only run once per page load
      if (typeof window === 'undefined') return

      const urlParams = new URLSearchParams(window.location.search)
      const googleAuth = urlParams.get('google_auth')
      const idToken = urlParams.get('id_token')
      const userEmail = urlParams.get('email')

      if (googleAuth === 'success' && idToken) {
        console.log('Google OAuth callback detected, processing...')

        // Decode token to get nonce
        const payload = JSON.parse(atob(idToken.split('.')[1]))
        const nonceInToken = payload.nonce

        // Get stored public key from OAuth initiation (MUST use the same key that generated the nonce)
        const storedPubKey = localStorage.getItem('turnkey_oauth_pubkey')
        const storedNonce = localStorage.getItem('turnkey_oauth_nonce')

        if (!storedPubKey || !storedNonce) {
          console.error('No stored public key or nonce found')
          alert('OAuth session expired. Please try signing in again.')
          window.history.replaceState({}, '', window.location.pathname)
          return
        }

        console.log('Stored Public Key:', storedPubKey)
        console.log('Stored Nonce:', storedNonce)
        console.log('Token Nonce:', nonceInToken)
        console.log('Nonces match:', storedNonce === nonceInToken)

        // Verify that the nonce in the token matches what we sent
        if (storedNonce !== nonceInToken) {
          console.error('❌ Nonce mismatch!')
          console.error('Expected (stored):', storedNonce)
          console.error('Received (token):', nonceInToken)
          alert('OAuth nonce validation failed. The nonce in the token does not match what we sent.')
          window.history.replaceState({}, '', window.location.pathname)
          return
        }

        console.log('✓ Nonce validation passed! Using stored public key for Turnkey authentication...')

        try {
          // Check if user exists
          const getSuborgsResponse = await axios.post('/api/auth/getSuborgs', {
            filterType: 'OIDC_TOKEN',
            filterValue: idToken,
          })

          let targetSubOrgId: string

          if (getSuborgsResponse.data.organizationIds.length === 0) {
            // Create new user with Stacks wallet
            const createResponse = await axios.post('/api/auth/createSuborg', {
              email: userEmail,
              oauthProviders: [
                { providerName: 'Google', oidcToken: idToken },
              ],
            })
            targetSubOrgId = createResponse.data.subOrganizationId
          } else {
            targetSubOrgId = getSuborgsResponse.data.organizationIds[0]
          }

          // Authenticate with OAuth
          const authResponse = await axios.post('/api/auth/oauth', {
            suborgID: targetSubOrgId,
            publicKey: storedPubKey,
            oidcToken: idToken,
          })