function Loader() {
  return (
    <div
      style={{
        position: "fixed",   // 🔑 key fix
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.35)",
        zIndex: 9999        // 🔑 stay on top
      }}
    >
      <h1 style={{ color: "#fff" }}>Loading...</h1>
    </div>
  );
}

export default Loader;
