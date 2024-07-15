import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:col-span-1 lg:block lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="px-4 py-16 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}

export default layout;
