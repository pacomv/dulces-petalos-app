import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="flex justify-center items-center bg-primary h-header-height">
      <Link to="/">
        <img title="Dulces Pétalos" src="/logo.svg" className="h-[50px]" />
      </Link>
    </header>
  );
};
