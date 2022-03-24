import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Box,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { Outlet } from "react-router";

import Sidebar from "./Sidebar.tsx";
import { useActions } from "hook";
import Header from "./Header.tsx";

// import MenuIcon from '@mui/icons-material/Menu';

const MainLayout: React.FC = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleSidebar } = useActions();
  const handleToggleDrawer = () => {
    toggleSidebar();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.background.default,
          "&.MuiAppBar-root": {
            border: `1px solid ${theme.palette.divider}`,
            color: "#000",
          },
        }}
        elevation={0}
      >
        <Toolbar>
          <Header handleToggleDrawer={handleToggleDrawer} />
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: theme.mixins.toolbar.height }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
