import { useState, useEffect } from "react";

export default function Posts() {
  // State for posts data
  const [posts, setPosts] = useState([]);
  // State for errors
  const [error, setError] = useState(null);
  // State for loading
  const [loading, setLoading] = useState(true);

  // Fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Data fetching failed:", error);
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.id}>
            <h2>
              {post.id}. {post.title}
            </h2>
            <p>{post.body}</p>
          </article>
        ))
      ) : (
        !loading && <p>No posts available.</p>
      )}
    </div>
  );
}
