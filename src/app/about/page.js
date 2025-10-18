export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Our Blog</h1>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Welcome to our minimal blog platform. This is a clean, simple, and focused space for sharing thoughts and stories.
            </p>
            
            <p>
              Built with <strong className="text-gray-900 dark:text-white">Next.js</strong>, <strong className="text-gray-900 dark:text-white">MongoDB</strong>, and <strong className="text-gray-900 dark:text-white">Tailwind CSS</strong>, this blog emphasizes readability and simplicity over unnecessary complexity.
            </p>
            
            <p>
              Every article is crafted to be clear, engaging, and easy to read. No distractions, no clutter—just great content.
            </p>

            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Minimal, distraction-free design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Fast and responsive interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Beautiful typography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Dark mode support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>SEO optimized</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Easy content creation</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Started</h2>
              <p className="mb-6">
                Ready to share your story? Creating a new post is simple and straightforward.
              </p>
              <a
                href="/create/post"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                ✏️ Create Your First Post
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
