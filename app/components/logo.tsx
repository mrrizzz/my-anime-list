export default function Logo() {
  return (
    <>
      <a
        href="https://flowbite.com"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          ANIMELISTT
        </span>
      </a>
    </>
  );
}
