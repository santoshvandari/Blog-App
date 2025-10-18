import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Blog
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
