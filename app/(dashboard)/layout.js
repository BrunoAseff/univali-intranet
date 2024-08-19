import "../globals.css";
import Nav from "@/components/Nav";
import Background from "@/components/Background";

export default function Layout({ children }) {
  return (
    <div>
      <Background />
      <Nav />
      <main>{children}</main>
    </div>
  );
}
