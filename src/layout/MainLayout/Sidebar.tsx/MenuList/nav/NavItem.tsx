import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MenuItem } from "menu-list";

import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { getChildrenBranchStyle } from "./itemStyle";
import { useActions, useTypedSelector } from "hook";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavItemProps {
  item: MenuItem;
  level: number;
}
const NavItem: React.FC<NavItemProps> = ({ item, level }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const { isOpen: isOpenSidebar, selectedItems } = useTypedSelector((state) => {
    return {
      isOpen: state.sidebar.isOpen,
      selectedItems: state.sidebar.selectedItems,
    };
  });

  const navigation = useNavigate();
  const { selectMenuItem, toggleSidebar } = useActions();

  const location = useLocation();

  useEffect(() => {
    let selected = location.pathname.split("/").includes(item.id);
    if (selected) {
      selectMenuItem(item.id);
    }
  }, []);
  const handleSelect = () => {
    navigation(item.url);
    selectMenuItem(item.id);
    if (!matchUpMd) {
      toggleSidebar();
    }
  };
  return (
    <ListItemButton
      onClick={handleSelect}
      selected={selectedItems.includes(item.id)}
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "8px",
        mb: "8px",
        width: level < 2 && !isOpenSidebar && matchUpMd ? "48px" : "100%",
        height: "48px",
        position: "relative",
        transition: theme.transitions.create(["all"], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeIn,
        }),
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
            level < 2 && !isOpenSidebar && matchUpMd
              ? "translateX(200px)"
              : "translateX(0)",
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
