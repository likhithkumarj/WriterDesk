import React, { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import '../style/dashboard/IdeasTab.css'

const IdeaProjects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleEdit = () => {
    setShowOptions(false);
  };

  const handleDelete = () => {
    setShowOptions(false);
  };

  return (
    <div className="ideas_projectContent">
      <div className="sort_selector">
        <button>Recent</button>
        <button>Priority</button>
        <button>Oldest</button>
      </div>

      <div className="IdeaProjContainer">
        <div className="IdeaProjCard">
          <div className="cardImg"></div>
          <div className="cardBottom">
            <div className="cardTitle">Project Title</div>
            <div className="optionsWrapper">
              <button
                className="optionsBtn"
                onClick={() =>
                  setOpenIndex(openIndex === 0 ? null : 0)
                }
              >
                <MoreVertical size={18} />
              </button>

              {/* Dropdown Menu */}
              {openIndex === 0 && (
                <div className="optionsMenu">
                  <button onClick={handleEdit}>
                    <Pencil size={16} /> Edit
                  </button>

                  <button onClick={handleDelete}>
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaProjects;
