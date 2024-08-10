import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 shadow-xl">
        <Navbar />
      </div>
      <div className="text-white  max-w-screen-xl mx-auto mt-36">
        {children}
      </div>
    </>
  );
}
