import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Post from "@/models/post";

export async function POST(request) {
    try {
        const body = await request.json();
        const { title, slug, excerpt, content } = body;

        // Basic validation
        if (!title || !slug || !content) {
            return NextResponse.json(
                { error: "Title, slug, and content are required" },
                { status: 400 }
            );
        }

        await connectDB();

        // Check if slug already exists
        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            return NextResponse.json(
                { error: "A post with this slug already exists" },
                { status: 409 }
            );
        }

        // Create the post
        const post = new Post({
            title,
            slug: slug.toLowerCase().trim(),
            excerpt: excerpt || "",
            content,
        });

        await post.save();

        return NextResponse.json(
            { message: "Post created successfully", post },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            { error: "Failed to create post" },
            { status: 500 }
        );
    }
}