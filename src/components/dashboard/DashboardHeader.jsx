import React from "react";
import "../../style/dashboard/Header.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { createIdea } from "../../services/ideaService";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");


function DashboardHeader() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleCreate = async () => {
    try {
      const idea = await createIdea(title);
      navigate(`/newidea/${idea.id}`);
    } catch (err) {
      alert(err.message);
    }
  };


  return (
    <>
      <div className="hearderContent">
        <div className="pageRouteName">Dashboard</div>
        <div className="btncontainer">
          <button className="postbtn">+ New Post</button>
          <button className="ideabtn" onClick={() => setModalOpen(true)}>
            + New Idea
          </button>
          <Link to="/new-project">
            <button className="projectbtn">+ New Project</button>
          </Link>
        </div>
      </div>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <h2>Create Idea</h2>

        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleCreate}>Start Writting</button>
      </Modal>
    </>
  );
}

export default DashboardHeader;
