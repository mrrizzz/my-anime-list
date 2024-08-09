import Header from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="fixed top-0 left-0 right-0 z-50 shadow-xl">
        <Header />
      </div>
      <div className="text-white bg-gray-800 mt-28">{children}</div>
    </div>
  );
}
