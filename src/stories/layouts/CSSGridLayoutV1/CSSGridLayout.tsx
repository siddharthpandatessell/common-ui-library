import React from "react";
import "./CSSGridLayout.css";
import { Header } from "../../Header";

export interface GridLayoutProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  content: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CSSGridLayout = (props: GridLayoutProps) => {
  return (
    <div className="row">
      <Header />
      
    </div>
  );
};

export default CSSGridLayout;

