import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useEffect, useRef } from "react";


export default function IdeaProjectCard({
  data,
  activeId,
  setActiveId,
  onEdit,
  onDelete,
}) {
  const menuRef = useRef(null);
  const isOpen = activeId === data.id;

  // close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setActiveId]);

  return (
    <div className="IdeaProjCard">
      {/* Image */}
      <div
        className="cardImg"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Bottom */}
      <div className="cardBottom">
        <div className="cardTitle">{data.title}</div>

        <div className="optionsWrapper">
          <button
            className="optionsBtn"
            onClick={(e) => {
              e.stopPropagation();
              setActiveId(isOpen ? null : data.id);
            }}
          >
            <MoreVertical size={18} />
          </button>

          {isOpen && (
            <div className="optionsMenu" ref={menuRef}>
              <button onClick={(e) => {onEdit(data.id);e.stopPropagation();console.log("Edit");}}>
              <Pencil size={16} /> Edit
              </button>
              <button onClick={() => onDelete(data.id)}>
              <Trash2 size={16} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
