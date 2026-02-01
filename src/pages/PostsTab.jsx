import { useEffect, useState } from "react";

export default function PostsTab() {
  const [sort, setSort] = useState("recent");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/posts?sort=${sort}`);
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, [sort]);

  return (
    <div>
      

      {/* Sort buttons */}
      <button onClick={() => setSort("recent")}>Recent</button>
      <button onClick={() => setSort("popular")}>Popular</button>
      <button onClick={() => setSort("oldest")}>Oldest</button>

      {posts.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
