"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (id) {
      const fetchPostDetails = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await response.json();
          setPost(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching post details:", error);
          setLoading(false);
        }
      };

      fetchPostDetails();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold">ID : {post.id}</h2>
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="text-lg mt-4">{post.body}</p>
    </div>
  );
}

export default BlogDetails;
