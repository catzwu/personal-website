import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-8 p-8">
      <Link href="/website">Home</Link>
      <Link href="/website/resume">Work</Link>
      <Link href="/website/puzzles">Puzzles</Link>
      <Link href="/website/about">About</Link>
    </div>
  );
};

export default Navbar;
