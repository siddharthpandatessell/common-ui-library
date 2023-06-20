import React from "react";
// import classNames from "classnames";
// import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon'

export interface MenuItemProps {
  /**
   * Is this the principal call to action on the page?
   */
  icon?: React.FunctionComponent<{}>;
  /**
   * What background color to use
   */
  text?: string;
  secondaryText: string;
  border?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const MenuItemComponent = ({
  icon,
  text,
  secondaryText,
  border,
}: MenuItemProps) => {
  return (
    <MenuItem sx={{ width: 320, maxWidth: '100%', border }}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText>{text}</ListItemText>
          <Typography variant="body2" color="text.secondary">
            {secondaryText}
          </Typography>
        </MenuItem>
  );
};

export default MenuItemComponent;
