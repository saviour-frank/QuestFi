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