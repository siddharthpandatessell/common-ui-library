import React from "react";
import "./GridLayout.module.css";

export interface GridLayoutProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  content: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const GridLayout = (props: GridLayoutProps) => {
  return (
    <div className="row">
      <div className="column" style={{backgroundColor: props.backgroundColor}}>{props.content}</div>
      <div className="column" style={{ backgroundColor: props.backgroundColor }}>
  {props.content}
</div>
    </div>
  );
};

export default GridLayout;

