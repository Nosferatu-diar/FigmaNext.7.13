// app/page.tsx

import { redirect } from "next/navigation";

export default function MainPage() {
  return redirect("/home");
}
