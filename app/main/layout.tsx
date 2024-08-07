import Header from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="">
        <Header />
      </div>
      <div className="text-white bg-gray-800">{children}</div>
    </div>
  );
}
