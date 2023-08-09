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
  content: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const GridLayout = (props: GridLayoutProps) => {
  return (
    <div className="row">
      <div className="column" style={{float: 'left', backgroundColor: 'aquamarine', width: '50%', minHeight: '100vh'}}>{props.content}</div>
      <div className="column" style={{float: 'left', backgroundColor: 'red', width: '50%', minHeight: '100vh'}}>
  {props.content}
</div>
    </div>
  );
};

export default GridLayout;

