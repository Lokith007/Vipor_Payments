'use client'

import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/Button'
import { PalmScanner } from '@/components/PalmScanner'
import { PalmPreview } from '@/components/PalmPreview'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPalm() {
  const [scanning, setScanning] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  const handleCapture = (imageData: string) => {
    localStorage.setItem('registeredPalm', imageData)
    setCapturedImage(imageData)
    setScanning(false)
  }

  const handleStartCamera = () => {
    setScanning(true)
    setCapturedImage(null)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Register Your Palm
          </h1>

          {scanning ? (
            <PalmScanner onCapture={handleCapture} />
          ) : capturedImage ? (
            <div className="space-y-6">
              <PalmPreview image={capturedImage} />
              <div className="flex gap-4 flex-col sm:flex-row">
                <Button 
                  variant="secondary" 
                  onClick={handleStartCamera}
                  className="flex-1"
                >
                  Retake Photo
                </Button>
                <Link href="/palm/verify" className="flex-1">
                  <Button variant="primary" className="w-full">
                    Proceed to Verify
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button variant="primary" onClick={handleStartCamera} className="text-lg px-8 py-4">
                Start Camera
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
