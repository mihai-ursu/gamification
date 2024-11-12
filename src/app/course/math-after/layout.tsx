import QuestionsFooter from "@/components/course/footer/footer";
import Header from "@/components/course/header/header";
import React from "react";

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="ml-auto mr-auto flex w-full max-w-[1460px] flex-col justify-between gap-4 p-8 pt-16">
        {children}
      </main>
      <QuestionsFooter />
    </div>
  );
}
