import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

// Only include variant, size, color from MuiButtonProps
// type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const TessellButton = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);


export default TessellButton;

// Button.defaultProps = {
//   sx:{},
//   variant: "contained",
//   size: "medium",
//   color: "primary",
// };