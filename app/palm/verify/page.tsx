'use client'

import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/Button'
import { PalmScanner } from '@/components/PalmScanner'
import { PalmPreview } from '@/components/PalmPreview'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function VerifyPalm() {
  const [scanning, setScanning] = useState(false)
  const [verificationImage, setVerificationImage] = useState<string | null>(null)
  const [registeredImage, setRegisteredImage] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('registeredPalm')
    if (stored) {
      setRegisteredImage(stored)
    }
  }, [])

  const handleCapture = (imageData: string) => {
    localStorage.setItem('verifyPalm', imageData)
    setVerificationImage(imageData)
    setScanning(false)
  }

  const handleStartCamera = () => {
    setScanning(true)
    setVerificationImage(null)
  }

  if (!registeredImage) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">No Registered Palm Found</h1>
            <p className="text-foreground/70 mb-6">
              Please register your palm first before verification.
            </p>
            <Link href="/palm/register">
              <Button variant="primary">Register Palm</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Verify Your Palm
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">Registered Palm</h2>
              <PalmPreview image={registeredImage} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">Verification Scan</h2>
              {scanning ? (
                <PalmScanner onCapture={handleCapture} />
              ) : verificationImage ? (
                <PalmPreview image={verificationImage} />
              ) : (
                <div className="bg-card border-2 border-dashed border-primary rounded-lg h-80 flex items-center justify-center">
                  <p className="text-foreground/70">Awaiting scan...</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Button 
              variant="secondary" 
              onClick={handleStartCamera}
              disabled={scanning}
              className="flex-1"
            >
              {scanning ? 'Scanning...' : 'Start Camera'}
            </Button>
            <Button 
              variant="primary"
              disabled={!verificationImage}
              className="flex-1"
            >
              Verify & Complete
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
