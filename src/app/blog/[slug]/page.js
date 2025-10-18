import Link from "next/link";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function SingleBlogPost({ params }) {
    const { slug } = params;
    await connectDB();
    const doc = await Post.findOne({ slug }).lean();
    
    if (!doc) return notFound();
    
    return (
        <article className="max-w-3xl mx-auto px-6 py-12">
            <Link href="/" className="text-blue-600 hover:opacity-70 mb-8 inline-block">
                ← Back to posts
            </Link>
            
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Published on {formatDate(doc.createdAt)}
                </p>
            </div>

            <div className="prose prose-neutral max-w-none whitespace-pre-wrap leading-relaxed text-lg">
                {doc.content}
            </div>

            <hr className="my-12" style={{ borderColor: "var(--border)" }} />
            
            <Link href="/" className="text-blue-600 hover:opacity-70 font-medium">
                ← Back to all posts
            </Link>
        </article>
    );
}
