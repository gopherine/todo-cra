import React, { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
  title: String;
}

const Layout: FC<ILayoutProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <nav className="bg-pink-300 shadow-lg">
        <div className="relative flex items-center justify-center h-20 font-bold text-xl">
          {title.toUpperCase()}
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Layout;
