import Link from "next/link";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

async function getPosts() {
  await connectDB();
  const docs = await Post.find({}, { title: 1, slug: 1, excerpt: 1, createdAt: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return docs.map((d) => ({
    _id: d._id.toString(),
    title: d.title,
    slug: d.slug,
    excerpt: d.excerpt || "",
    createdAt: d.createdAt,
  }));
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl font-bold leading-tight">Welcome to the Blog</h1>
          <p className="text-xl" style={{ color: "var(--text-secondary)" }}>
            Discover stories, insights, and ideas. Read the latest articles below.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="group pb-8 border-b hover:opacity-80 transition"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-2xl font-bold text-blue-600 hover:opacity-80"
                  >
                    {post.title}
                  </Link>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                  {formatDate(post.createdAt)}
                </p>
                {post.excerpt && (
                  <p className="text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-medium text-blue-600 hover:opacity-70"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}


