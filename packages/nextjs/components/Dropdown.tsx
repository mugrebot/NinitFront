import React, { useState } from "react";
import { NavLink } from "./Header";

interface DropdownMenuProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ href, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <NavLink href={href}>{title}</NavLink>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default DropdownMenu;
