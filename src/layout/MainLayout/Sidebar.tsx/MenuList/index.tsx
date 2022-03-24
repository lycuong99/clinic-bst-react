import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";

import menuItems from "menu-list";
import NavGroup from "./nav/NavGroup";

const MenuList: React.FC = () => {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} color="error" variant="h6" align="center">
            Menu Items Error!
          </Typography>
        );
    }
  });
  return (
    <Box>
      <List disablePadding>{navItems}</List>
    </Box>
  );
};

export default MenuList;
