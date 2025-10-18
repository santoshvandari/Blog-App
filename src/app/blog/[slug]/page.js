import { notFound } from "next/navigation";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

export default async function SingleBlogPost({ params }) {
    const { slug } = params;
    await connectDB();
    const doc = await Post.findOne({ slug }).lean();
    if (!doc) return notFound();
    return (
        <main className="max-w-2xl mx-auto p-6 space-y-4">
            <h1 className="text-3xl font-bold">{doc.title}</h1>
            <article className="prose prose-neutral max-w-none whitespace-pre-wrap">
                {doc.content}
            </article>
        </main>
    );
}
