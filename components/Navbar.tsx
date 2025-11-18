import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">Vipor Payments</span>
          </Link>

          <div className="flex gap-6 items-center">
            <Link href="/auth/signin" className="hover:opacity-80 transition">
              Sign In
            </Link>
            <Link href="/auth/signup" className="hover:opacity-80 transition">
              Sign Up
            </Link>
            <Link href="/palm/register" className="hover:opacity-80 transition">
              Register Palm
            </Link>
            <Link href="/palm/verify" className="hover:opacity-80 transition">
              Verify Palm
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
