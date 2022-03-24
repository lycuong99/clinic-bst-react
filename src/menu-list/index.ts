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
  url: string;
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
          id: "r1",
          title: "Report 1",
          type: "item",
          url: "/report/r1",
          icon: null,
          breadcrumbs: false,
        },
        {
          id: "r2",
          title: "Report 2",
          type: "item",
          url: "/report/r2",
          icon: null,
          breadcrumbs: false,
        },
        {
          id: "report-type",
          title: "Report",
          type: "collapse",
          icon: null,

          children: [
            {
              id: "r31",
              title: "report type 3 1",
              type: "item",
              url: "/report/report-type/r31",
              icon: null,
              breadcrumbs: false,
            },
            {
              id: "r32",
              title: "report type 3 2",
              type: "item",
              url: "/report/report-type/r32",
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
    {
      id: "test",
      title: "test",
      type: "item",
      url: "/test",
      icon: null,
      breadcrumbs: false,
    },
  ],
};

const menuItems = { items: [dashboard] };
export default menuItems;
