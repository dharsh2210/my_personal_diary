import React, { useState } from "react";

function History({ notes }) {
  const [expanded, setExpanded] = useState(null);

  const toggleShow = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          className="text-center mb-5"
          style={{ color: "#6b21a8", fontSize: "2.5rem" }}
        >
          Diary History
        </h1>

        <div
          style={{
            background: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            minHeight: "300px",
          }}
        >
          {notes.length === 0 ? (
            <p style={{ textAlign: "center", color: "#6b7280" }}>
              No diary entries yet.
            </p>
          ) : (
            notes.map((entry, index) => (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  padding: "1rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1, paddingRight: "1rem" }}>
                  <h4 style={{ color: "#4b5563", marginBottom: "0.5rem" }}>
                    {entry.date}
                  </h4>
                  <p style={{ color: "#374151", margin: 0 }}>
                    {expanded === index
                      ? entry.text
                      : entry.text.substring(0, 60) + "..."}
                  </p>
                </div>
                <button
                  onClick={() => toggleShow(index)}
                  style={{
                    background: "#6b21a8",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  {expanded === index ? "Hide" : "Show"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
