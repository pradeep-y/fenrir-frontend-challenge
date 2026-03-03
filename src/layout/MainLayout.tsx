import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children }: any) {
  return (
    <div className="flex h-screen bg-[#f4f6f9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">

        <Header />

        <div className="px-10 py-8 max-w-[1400px] w-full mx-auto">
          {children}
        </div>

      </div>
    </div>
  );
}