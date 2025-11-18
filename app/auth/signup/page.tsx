'use client'

import { Navbar } from '@/components/Navbar'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-6">Create Account</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input 
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input 
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <Input 
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button variant="primary" className="w-full mt-6">
              Sign Up
            </Button>
          </form>

          <div className="mt-4 text-center text-foreground/70">
            <p>
              Already have an account?{' '}
              <Link href="/auth/signin" className="text-primary font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
