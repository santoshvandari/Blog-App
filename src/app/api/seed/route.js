import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  await connectDB();
  const count = await Post.countDocuments();
  if (count > 0) {
    return NextResponse.json({ message: "Already seeded", count });
  }
  const demo = [
    {
      title: "Hello, Minimal Blog",
      slug: "hello-minimal-blog",
      excerpt: "A tiny Next.js + MongoDB blog.",
      content:
        "This is a minimalistic blog built with Next.js App Router and MongoDB via Mongoose. Edit src/app/page.js and src/app/blog/[slug]/page.js to customize.",
    },
    {
      title: "Second Post",
      slug: "second-post",
      excerpt: "Just another example post.",
      content: "Here's some content for the second post. Keep it simple.",
    },
  ];
  await Post.insertMany(demo);
  const total = await Post.countDocuments();
  return NextResponse.json({ message: "Seeded", total });
}
