import React, { type ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div className="ks-app-root">
      <header className="ks-app-header">
        <div className="ks-app-logo">
          Kids<span>Social</span>
        </div>
        <div className="ks-app-title">{title}</div>
      </header>

      <main className="ks-app-main">{children}</main>
    </div>
  );
};