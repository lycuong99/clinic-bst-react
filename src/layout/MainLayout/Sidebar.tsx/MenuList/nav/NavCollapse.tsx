import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
  Popover,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MenuItemType, SubmenuItem } from "menu-list";
import NavItem from "./NavItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { getChildrenBranchStyle, getParentBranchStyle } from "./itemStyle";

import { useTypedSelector } from "hook";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { Box } from "@mui/system";
import { useLocation } from "react-router";

interface NavCollapseProps {
  item: SubmenuItem;
  level: number;
}
const NavCollapse: React.FC<NavCollapseProps> = ({ item, level }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isOpenSidebar = useTypedSelector((state) => state.sidebar.isOpen);
  let lengOfBranch = item.children?.length * 48 + item.children.length * 8 + 8;
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const openPopover = Boolean(anchorEl);
  const location = useLocation();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const selected = location.pathname.split("/").includes(item.id);

  useEffect(() => {
    if (!isOpenSidebar) {
      if (open) {
        setOpen(false);
      }
    }
  }, [isOpenSidebar]);

  const items = item.children?.map((menu: MenuItemType) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} item={menu} level={level + 1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={level + 1} />;
    }
  });

  const listItemRender = (
    <List
      sx={{
        paddingTop: 0,
        paddingLeft: `${22 + 12}px`,
        paddingBottom: 0,
        position: "relative",
        "&:after": getParentBranchStyle(
          theme,
          `calc(${lengOfBranch}px - 16px - 48px + 8px)`
        ),
      }}
    >
      {items}
    </List>
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton
        selected={open || openPopover || selected}
        onClick={(e) => {
          if (isOpenSidebar) {
            setOpen(!open);
          } else {
            setAnchorEl(e.currentTarget);
          }
        }}
        sx={{
          borderRadius: "12px",
          mb: "8px",
          paddingX: 3,
          paddingY: 3,
          width: !isOpenSidebar && level < 2 ? "48px" : "100%",
          // minWidth: "48px",
          alignItems: "center",
          display: "flex",
          height: "48px",
          position: "relative",
          transition: theme.transitions.create(["width"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeIn,
            delay: "2s",
          }),
          "&:after": level > 1 ? getChildrenBranchStyle(theme) : undefined,
          "&.MuiListItemButton-root": {
            transition: theme.transitions.create(["all"], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeIn,

              delay: "2s",
            }),
          },
          "& .Mui-selected": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        {level < 2 ? (
          <ListItemIcon
            sx={{ minWidth: isOpenSidebar && level < 2 ? "32px" : 0 }}
          >
            <HomeTwoToneIcon fontSize="medium" />
          </ListItemIcon>
        ) : null}
        <ListItemText
          sx={{
            m: 0,
            minWidth: "50px",
            position: "relative",
            opacity: level < 2 && !isOpenSidebar && matchUpMd ? 0 : 1,
            transform:
              level < 2 && !isOpenSidebar && matchUpMd
                ? "translateX(200px)"
                : "translateX(0)",
            transition: theme.transitions.create(["all"], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeIn,
            }),
          }}
          primary={
            <Typography color="inherit" variant="h5" sx={{ m: 0 }}>
              {item.title}
            </Typography>
          }
        ></ListItemText>
        <Box
          sx={{
            flex: "auto",
            opacity: level < 2 && !isOpenSidebar && matchUpMd ? 0 : 1,
            // width: !isOpenSidebar && level < 2 ? 0 : "auto",
            position: "relative",
            transform:
              level < 2 && !isOpenSidebar
                ? "translateX(250px)"
                : "translateX(0)",
            display: "flex",
            justifyContent: "end",
            width: "auto",
            transition: theme.transitions.create(["all"], {
              duration: theme.transitions.duration.short,
              easing: theme.transitions.easing.easeIn,
            }),
          }}
        >
          {open || openPopover ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </ListItemButton>
      {isOpenSidebar ? (
        <Collapse in={open} unmountOnExit>
          {listItemRender}
        </Collapse>
      ) : (
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          elevation={2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          TransitionComponent={Zoom}
          PaperProps={{
            sx: {
              position: "relative",
              // top: "132px",,
              borderRadius: "12px",
              paddingTop: 2,
              paddingRight: "22px",
              width: "14rem",
              marginTop: level > 1 ? 2.2 : 2,
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            },
          }}
          sx={{
            "& .MuiPopover-paper": {
              top: "12px",
            },
          }}
        >
          {listItemRender}
        </Popover>
      )}
    </>
  );
};

export default NavCollapse;
