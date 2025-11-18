'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './Button'

interface PalmScannerProps {
  onCapture: (imageData: string) => void
}

export function PalmScanner({ onCapture }: PalmScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' }
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setIsActive(true)
        }
      } catch (err) {
        console.error('Camera access denied:', err)
        alert('Unable to access camera. Please check permissions.')
      }
    }

    startCamera()

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach(track => track.stop())
      }
    }
  }, [])

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth
        canvasRef.current.height = videoRef.current.videoHeight
        context.drawImage(videoRef.current, 0, 0)
        const imageData = canvasRef.current.toDataURL('image/png')
        onCapture(imageData)
      }
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-card border-2 border-primary rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full aspect-video bg-black"
        />
      </div>
      <canvas ref={canvasRef} className="hidden" />
      
      <div className="flex gap-4">
        <Button variant="primary" onClick={handleCapture} disabled={!isActive} className="flex-1">
          Capture Palm
        </Button>
      </div>
    </div>
  )
}
