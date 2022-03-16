type MenuType = "item" | "collapse" | "group";

export interface MenuGroupItem {
  id: string;
  title: string;
  type: "group";
  children: MenuItemType[];
}

export interface SubmenuItem {
  id: string;
  title: string;
  type: "collapse";
  children: MenuItemType[];
  icon: any;
}

export interface MenuItem {
  id: string;
  title: string;
  type: "item";
  icon: any;
  url?: string;
  breadcrumbs?: boolean;
}
export type MenuItemType = MenuItem | SubmenuItem;

const dashboard: MenuGroupItem = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: null,
      breadcrumbs: false,
    },
    {
      id: "report",
      title: "Report",
      type: "collapse",
      icon: null,
      children: [
        {
          id: "d1",
          title: "D1",
          type: "item",
          url: "/dashboard/defad1ult",
          icon: null,
          breadcrumbs: false,
        },
        {
          id: "d2",
          title: "D2",
          type: "item",
          url: "/dashboard/default",
          icon: null,
          breadcrumbs: false,
        },
        {
          id: "report2",
          title: "Report",
          type: "collapse",
          icon: null,

          children: [
            {
              id: "d4",
              title: "D1",
              type: "item",
              url: "/dashboard/defad1ult",
              icon: null,
              breadcrumbs: false,
            },
            {
              id: "d3",
              title: "D2",
              type: "item",
              url: "/dashboard/default",
              icon: null,
            },
          ],
        },
      ],
    },
    {
      id: "report5",
      title: "Report",
      type: "collapse",

      icon: null,

      children: [
        {
          id: "d14",
          title: "D1",
          type: "item",
          url: "/dashboard/defad1ult",
          icon: null,
        },
        {
          id: "d13",
          title: "D2",
          type: "item",
          url: "/dashboard/default",
          icon: null,
        },
      ],
    },
  ],
};

const menuItems = { items: [dashboard] };
export default menuItems;
