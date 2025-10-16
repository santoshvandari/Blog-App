import React from 'react'

function SingleBlogPost({params}) {
    const {slug} = params;
    console.log(slug);
    
    return (
        <div>
            <h1>This is a single blog post page</h1>
            <p>Slug: {slug}</p>
        </div>
    )
}

export default page
