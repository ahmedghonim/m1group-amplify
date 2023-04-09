import Footer from "./footer";
import NavBar from "./nav-bar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
