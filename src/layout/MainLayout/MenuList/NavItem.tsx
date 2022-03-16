import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { MenuItem } from "../../../menu-list";

import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { getChildrenBranchStyle } from "./branchStyle";
import { useTypedSelector } from "../../../hook";

interface NavItemProps {
  item: MenuItem;
  level: number;
}
const NavItem: React.FC<NavItemProps> = ({ item, level }) => {
  const theme = useTheme();
  const isOpenSidebar = useTypedSelector((state) => state.sidebar.isOpen);

  return (
    <ListItemButton
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "8px",
        mb: "8px",
        width: !isOpenSidebar && level < 2 ? "48px" : "auto",
        height: "48px",
        position: "relative",
        p: 3,
        "&:after": level > 1 ? getChildrenBranchStyle(theme) : undefined,
      }}
    >
      {level < 2 ? (
        <ListItemIcon sx={{ minWidth: isOpenSidebar ? "32px" : 0 }}>
          <HomeTwoToneIcon fontSize="medium" />
        </ListItemIcon>
      ) : null}

      <ListItemText
        sx={{
          m: 0,
          // width: isOpenSidebar ? "auto " : 0,
          transform:
            level < 2 && !isOpenSidebar ? "translateX(200px)" : "translateX(0)",
          opacity: level < 2 && !isOpenSidebar ? 0 : 1,
          transition: theme.transitions.create(["all"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeIn,
          }),
        }}
        primary={
          <Typography variant={"h5"} color="primay">
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
};
export default NavItem;
