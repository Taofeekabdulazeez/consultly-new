"use client";
import { useOustideClick } from "@/hooks/useOutsideClick";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface MenuInterface {
  open: (id: string) => void;
  openId: string;
  close: () => void;
  setPosition: (postion: Position) => void;
  position: Position;
}

const MenuContext = createContext({} as MenuInterface);

interface MenuProps {
  children: ReactNode;
}

type Position = {
  x?: number;
  y?: number;
};

function Menus({ children }: MenuProps) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({} as Position);
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

type ToggleProps = {
  id: string;
};

function Toggle({ id }: ToggleProps) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const rect = event.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height,
    });

    if (openId === "" || openId !== id) open(id);
    else close();
  };

  return (
    <button
      className="p-3 rounded inline-flex items-center justify-between hover:bg-slate-100"
      onClick={handleClick}
    >
      <HiOutlineDotsVertical color="var(--color-gray-700)" size={20} />
    </button>
  );
}

type ListProps = {
  id: string;
  children: ReactNode;
};

function List({ id, children }: ListProps) {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOustideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className={`fixed right-${position.x} left-${position.y} bg-white p-6 flex flex-col rounded-md`}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
