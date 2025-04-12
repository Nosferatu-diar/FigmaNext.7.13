// app/sign-in/layout.tsx
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is a Home Page",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen">
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
