import type { TChildren } from "@/core/types/props";

function Layout({ children }:TChildren) {
  return (
    <>
      <header className="text-white flex justify-around text-2xl font-bold p-2 items-center bg-sky-500 rounded-[10px] mt-3 w-[70%] mx-auto max-md:flex-col max-md:text-lg">
        <h1>Contact App</h1>
        <p>Savvy's Task | Hesam Khaki</p>
      </header>
      <div>{children}</div>
      <footer className="rounded-t-[10px] p-2 bg-sky-500 text-center text-white text-2xl max-md:text-lg font-bold">
        <p>Created with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;