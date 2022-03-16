import { Divider, List, ListSubheader, useTheme } from "@mui/material";
import {} from "@mui/material/styles";

import { useTypedSelector } from "../../../hook";
import { MenuGroupItem, MenuItem, MenuItemType } from "../../../menu-list";
import NavCollapse from "./NavCollapse";
import NavItem from "./NavItem";

interface NavGroupProps {
  item: MenuGroupItem;
}

const NavGroup: React.FC<NavGroupProps> = ({ item }) => {
  const isOpenSidebar = useTypedSelector((state) => state.sidebar.isOpen);
  const theme = useTheme();

  const items = item.children.map((menu: MenuItemType) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} item={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
    }
  });

  return (
    <>
      <List
        sx={{
          "&.MuiList-root": {
            padding: 0,
          },

          "&.MuiList-subheader .MuiListItemButton-root,.MuiListSubheader-root":
            isOpenSidebar
              ? {
                  marginLeft: 0,
                  transform: "translateX(0)",
                  transition: theme.transitions.create(["all"], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeOut,
                    // delay: "2s",
                  }),
                }
              : {
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                  transition: theme.transitions.create(["all"], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeOut,
                    delay: '0.195s'
                  }),
                },

          "&.MuiList-subheader .MuiListSubheader-root": {
            width: "fit-content",
          },
        }}
        disablePadding
        subheader={
          <ListSubheader
            sx={{
              paddingX: !isOpenSidebar ? 0 : undefined,
              transition: theme.transitions.create(["padding"], {
                duration: theme.transitions.duration.shortest,
                easing: isOpenSidebar
                  ? theme.transitions.easing.easeIn
                  : theme.transitions.easing.sharp,
              }),
            }}
          >
            {item.title}
          </ListSubheader>
        }
      >
        {items}
      </List>
      <Divider />
    </>
  );
};

export default NavGroup;
