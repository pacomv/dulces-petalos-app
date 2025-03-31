import { ReactNode } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children = <Outlet /> }: Props) => {
  return (
    <div className="h-screen">
      <Header />
      <main
        className="bg-background h-full overflow-auto"
        style={{ height: `calc(100dvh - var(--header-height))` }}
      >
        <div className="max-w-[1280px] my-0 mx-auto p-8 h-full">{children}</div>
      </main>
    </div>
  );
};
