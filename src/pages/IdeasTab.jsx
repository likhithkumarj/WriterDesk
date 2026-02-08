import React, { useState } from "react";
import '../style/dashboard/IdeasTab.css'
import IdeasCard from "../components/dashboard/IdeasCard";
import Button from '@mui/material/Button';
import { useIdeas } from "../context/IdeaContext";


const IdeasTab = () => {

  const { ideas } = useIdeas();

  const [activeId, setActiveId] = useState(null);

  const handleEdit = (id) => {
    console.log("Edit card", id);
  };

  const handleDelete = (id) => {
    console.log("Delete card", id);
  };

  return (
    <div className="ideas_projectContent">
      <div className="sort_selector">
        <Button variant="outlined">Recent</Button>
        <button>Priority</button>
        <button>Oldest</button>
      </div>

      <div className="IdeaProjContainer">
        {ideas.map((card) => (
        <IdeasCard
          key={card.id}
          data={card}
          activeId={activeId}
          setActiveId={setActiveId}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      </div>
    </div>
  );
};

export default IdeasTab;
