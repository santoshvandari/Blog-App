import Link from "next/link";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

async function getPosts() {
  await connectDB();
  const docs = await Post.find({}, { title: 1, slug: 1, excerpt: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return docs.map((d) => ({
    _id: d._id.toString(),
    title: d.title,
    slug: d.slug,
    excerpt: d.excerpt || "",
  }));
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p._id} className="border p-4 rounded hover:bg-gray-50">
              <Link href={`/blog/${p.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {p.title}
              </Link>
              {p.excerpt && <p className="text-gray-600 mt-1">{p.excerpt}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

