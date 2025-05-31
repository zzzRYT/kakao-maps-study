import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", color: "#333" }}>
          Welcome to My App
        </h1>
        <p style={{ textAlign: "center", color: "#666" }}>
          This is a simple layout example.
        </p>
        <ul>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
