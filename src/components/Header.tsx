import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/"> Home</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default Header;
