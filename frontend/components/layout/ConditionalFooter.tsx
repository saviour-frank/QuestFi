'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

// Don't show footer on docs page
  if (pathname?.startsWith('/docs')) {
    return null
  }