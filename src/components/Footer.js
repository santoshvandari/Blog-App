export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t mt-16" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm">
        <p>© {year} Blog App. A minimal blogging platform.</p>
      </div>
    </footer>
  );
}
