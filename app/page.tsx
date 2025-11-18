import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to Vipor Payments
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Secure payment authentication using advanced palm biometrics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signin">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
                Sign In
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition">
                Sign Up
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/palm/register">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition cursor-pointer">
                <h2 className="text-2xl font-bold text-primary mb-2">Register Palm</h2>
                <p className="text-foreground/70">Capture and register your palm for authentication</p>
              </div>
            </Link>
            <Link href="/palm/verify">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition cursor-pointer">
                <h2 className="text-2xl font-bold text-secondary mb-2">Verify Palm</h2>
                <p className="text-foreground/70">Verify your palm identity for secure payments</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
