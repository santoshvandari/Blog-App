export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to our minimal blog platform. This is a clean, simple, and focused space for sharing thoughts and stories.
        </p>
        
        <p>
          Built with <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>, this blog emphasizes readability and simplicity over unnecessary complexity.
        </p>
        
        <p>
          Every article is crafted to be clear, engaging, and easy to read. No distractions, no clutter—just great content.
        </p>

        <div className="pt-4">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimal, distraction-free design</li>
            <li>Fast and responsive interface</li>
            <li>Beautiful typography</li>
            <li>Dark mode support</li>
            <li>SEO optimized</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
