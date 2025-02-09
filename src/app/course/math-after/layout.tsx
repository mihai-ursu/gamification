import Header from "@/components/course/header/header";
import React from "react";

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex h-full flex-grow flex-col">{children}</main>
    </div>
  );
}
