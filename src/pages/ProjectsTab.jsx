import { useEffect, useState } from "react";

export default function ProjectTab() {
  const [sort, setSort] = useState("recent");
  const [Project, setProject] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch(`/api/Project?sort=${sort}`);
      const data = await res.json();
      setProject(data);
    }

    fetchProjects();
  }, [sort]);

  return (
    <div>
      {/* Sort buttons */}
      <button onClick={() => setSort("recent")}>Recent</button>
      <button onClick={() => setSort("popular")}>Popular</button>
      <button onClick={() => setSort("oldest")}>Oldest</button>

      {Project.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
