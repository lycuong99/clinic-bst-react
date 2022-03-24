import { Drawer, useTheme, Box, Tooltip, useMediaQuery } from "@mui/material";

import ToggleSidebarButton from "./ToggleSidebarButton";
import { useTypedSelector, useActions } from "../../../hook";
import MenuList from "./MenuList";

interface SidebarProps {}
const drawerWidth = "18rem";
const minimalDrawerWidth = `120px`;

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const open = useTypedSelector((state) => state.sidebar.isOpen);

  const { toggleSidebar } = useActions();
  const handleToggleDrawer = () => {
    toggleSidebar();
  };
  const handleCloseDrawer = () => toggleSidebar();

  const widthSidebar = !matchUpMd
    ? matchDownSM
      ? drawerWidth
      : `calc(${drawerWidth} + 2em)`
    : open
    ? drawerWidth
    : minimalDrawerWidth;

  const transition = theme.transitions.create(["all"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
    delay: "100ms",
  });

  return (
    <Drawer
      variant={matchUpMd ? "permanent" : "temporary"}
      anchor="left"
      sx={{
        // flexShrink: 0,
        position: "relative",
        width: widthSidebar,
        transition: transition,
        "& .MuiDrawer-paper": {
          paddingTop: "50px",
          paddingX: 4,
          top: matchUpMd ? `calc(${theme.mixins.toolbar.height} + 2px)` : "0",
          width: widthSidebar,
          overflow: "visible",
          boxSizing: "border-box",
          transition: transition,
        },
        "& .MuiDrawer-paper:hover .toggle-sidebar-btn": {
          opacity: 1,
        },
        "& .MuiDrawer-modal": {
          transition: transition,
        },
      }}
      onClose={handleCloseDrawer}
      open={open}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {matchUpMd && (
        <ToggleSidebarButton
          className="toggle-sidebar-btn"
          open={open}
          onToggleDrawer={handleToggleDrawer}
        />
      )}
      <Box
        sx={{
          overflowX: "hidden",
        }}
      >
        <MenuList />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
