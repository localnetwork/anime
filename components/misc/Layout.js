import { Header } from "@/components/utilities/Header";
import { Sidebar } from "../utilities/Sidebar";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="main-content w-full lg:max-w-[75%] px-[15px]">
            {children}
          </div>
          <div className="sidebar px-[15px] w-full lg:max-w-[25%] px-[15px]">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
