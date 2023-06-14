"use client";
import useConversation from "@/app/Hooks/useConversations";
import useRoutes from "@/app/Hooks/useRoutes";
import React from "react";
import MobileItem from "./MobileItem";

const MobileFooter: React.FC = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) return null;

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-2 lg:hidden">
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
export default MobileFooter;
