"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps {
  data: any;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const params = useParams();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <nav className={"flex items-center space-x-4 lg:space-x-6"}>main-nav</nav>
  );
};

export default MainNav;
