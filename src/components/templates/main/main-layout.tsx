import React, { PropsWithChildren } from "react";
import "./main-layout.css";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@inteligo/router";

interface IProps {
  title: string;
}

export const MainLayout: React.FC<PropsWithChildren<IProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <div className="container-fluid nav-container">
        <header className="header text-center">
          <h2>{title}</h2>
          <div className="nav">
            <h3>
              <Link to={APP_ROUTES.home}>Home</Link>
            </h3>
            <h3>
              <Link to={APP_ROUTES.formAdvanced}>Form advance</Link>
            </h3>
          </div>
        </header>

        <main className="container main-container">{children}</main>
      </div>
    </>
  );
};
