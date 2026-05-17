'use client'

import { Twitter, Github, MessageCircle, Zap, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// Floating 3D Elements
function Scene3D() {
  const sphere1 = useRef<THREE.Mesh>(null!)
  const sphere2 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (sphere1.current) {
      sphere1.current.rotation.y = time * 0.15
      sphere1.current.position.y = Math.sin(time * 0.5) * 0.3
    }

    if (sphere2.current) {
      sphere2.current.rotation.y = -time * 0.2
      sphere2.current.position.x = Math.cos(time * 0.4) * 0.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#10b981" />