import React from "react";

const blogPosts = [
    {
        id: 1,
        title: "The Best Tibetan Singing bowls for meditation",
        image: "/assets/images/img2.jpg",
        user: "Achyut Neupane",
        date: "May 12, 2021",
        excerpt:
            "Tibetan singing bowls produce soothing sounds, aiding meditation, relaxation, energy balance, and emotional well-being.",
    },
    {
        id: 2,
        title: "Top 10 E-commerce Trends in 2025",
        image: "/assets/images/varved.jpg",
        user: "Ganesh Silwal",
        date: "May 12, 2021",
        excerpt:
            "Stay ahead of the competition by understanding the latest trends in the e-commerce industry.",
    },
    {
        id: 3,
        title: "How to Optimize Your Online Store for SEO",
        image: "/assets/images/striker.jpg",
        user: "Ramhari Neupane",
        date: "May 12, 2021",
        excerpt:
            "Boost your online store's visibility with these essential SEO tips and strategies.",
    },
    {
        id: 1,
        title: "The Best Tibetan Singing bowls for meditation",
        image: "/assets/images/img2.jpg",
        user: "Achyut Neupane",
        date: "May 12, 2021",
        excerpt:
            "Tibetan singing bowls produce soothing sounds, aiding meditation, relaxation, energy balance, and emotional well-being.",
    },
    {
        id: 2,
        title: "Top 10 E-commerce Trends in 2025",
        image: "/assets/images/varved.jpg",
        user: "Ganesh Silwal",
        date: "May 12, 2021",
        excerpt:
            "Stay ahead of the competition by understanding the latest trends in the e-commerce industry.",
    },
    {
        id: 3,
        title: "How to Optimize Your Online Store for SEO",
        image: "/assets/images/striker.jpg",
        user: "Ramhari Neupane",
        date: "May 12, 2021",
        excerpt:
            "Boost your online store's visibility with these essential SEO tips and strategies.",
    },
];

const BlogComponent = () => {
    return (
        <div className="blog-container">
            {blogPosts.map((post) => (
                <div key={post.id} className="blog-post">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="blog-image"
                    />
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <p className="user">
                        {post.user}
                        <br />
                        {post.date}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BlogComponent;
