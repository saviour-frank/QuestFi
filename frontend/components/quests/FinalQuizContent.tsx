    'use client'

import { useState } from 'react'
import { Trophy } from 'lucide-react'

export default function FinalQuizContent({ questions, quizAnswers, setQuizAnswers, onComplete }: any) {
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)