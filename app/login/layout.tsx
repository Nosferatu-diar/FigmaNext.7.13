// app/sign-in/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is a Login Page",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-screen">{children}</main>;
}
