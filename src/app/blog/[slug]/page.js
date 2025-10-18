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

function estimateReadTime(content) {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
}

export default async function SingleBlogPost({ params }) {
    const { slug } = await params;
    await connectDB();
    const doc = await Post.findOne({ slug }).lean();

    if (!doc) return notFound();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to posts
                </Link>

                {/* Article Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {doc.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(doc.createdAt)}
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {estimateReadTime(doc.content)} min read
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 md:p-12 mb-12">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {doc.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() ? (
                                <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {paragraph}
                                </p>
                            ) : (
                                <div key={index} className="h-4"></div>
                            )
                        ))}
                    </div>
                </div>

                {/* Article Footer */}
                <footer className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to all posts
                    </Link>

                    <Link
                        href="/create/post"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        ✏️ Write a post
                    </Link>
                </footer>
            </article>
        </div>
    );
}
