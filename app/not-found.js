import Link from "next/link";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const linkStyle = {
  color: "#885df5",
  fontWeight: "bold",
  padding: "1.5em",
};

export default function NotFound() {
  return (
    <main style={containerStyle}>
      <span>🦒 This page can not be found 🦒</span>
      <Link href={"./tours"} style={linkStyle}>
        Go Home
      </Link>
    </main>
  );
}
