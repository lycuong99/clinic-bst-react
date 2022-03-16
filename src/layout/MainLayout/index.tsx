import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Box,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { Outlet } from "react-router";

import MenuList from "./MenuList";
import { useTypedSelector, useActions } from "../../hook";
import ToggleSidebarButton from "./ToggleSidebarButton";

// import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = "18rem";
const minimalDrawerWidth = `120px`;


const MainLayout: React.FC = () => {
  const theme = useTheme();
  // const [open, setOpen] = useState(true);
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const open = useTypedSelector((state) => state.sidebar.isOpen);
  const { toggleSidebar } = useActions();

  const handleToggleDrawer = () => {
    toggleSidebar();
  };
  const handleCloseDrawer = () => toggleSidebar();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
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
          {!matchUpMd && (
            <IconButton
              sx={{ borderRadius: "0.75rem" }}
              onClick={handleToggleDrawer}
            >
              <MenuRoundedIcon
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            </IconButton>
          )}
          {/* LOGO - SECTION */}
          <Typography>Phong Kham BST</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={matchUpMd ? "permanent" : "temporary"}
        anchor="left"
        sx={{
          flexShrink: 0,
          position: "relative",

          "& .MuiDrawer-paper": {
            paddingTop: "50px",
            paddingX: 4,
            top: matchUpMd ? "66px" : "0",
            width: open
              ? matchUpMd
                ? drawerWidth
                : `calc(${drawerWidth} + 2em)`
              : minimalDrawerWidth,
            overflow: "visible",
            boxSizing: "border-box",
            transition: theme.transitions.create(["width", "display"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          },
          "& .MuiDrawer-paper:hover .toggle-sidebar-btn": {
            opacity: 1,
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
        <Box sx={{ overflowX: "hidden" }}>
          <MenuList />
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
