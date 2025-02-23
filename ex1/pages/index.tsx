import Link from "next/link";

export default function Home() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Data Viewer</h1>
            <p>Select a category:</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link href="/users">
                    <button style={buttonStyle}>View Users</button>
                </Link>
                <Link href="/products">
                    <button style={buttonStyle}>View Products</button>
                </Link>
            </div>
        </div>
    );
}

// Inline button styling (optional, can be replaced with CSS)
const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "white",
};
