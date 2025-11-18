import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Welcome to PalmPay Dashboard. Choose an action:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/palm/register"
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Register Palm</h2>
            <p>Capture and link your palm to your account.</p>
          </Link>

          <Link
            href="/palm/verify"
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Verify Palm</h2>
            <p>Verify your palm to authorize payment.</p>
          </Link>
        </div>
      </div>
    </>
  );
}
