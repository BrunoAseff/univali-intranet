import "../globals.css";
import Nav from "@/components/Nav";
import Background from "@/components/Background";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Background />
      <Nav />
      <main className="flex w-full h-screen flex-grow">{children}</main>
    </div>
  );
}
