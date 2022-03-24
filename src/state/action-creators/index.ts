import { ActionType } from "../action-types";
import { SelectMenuItemAction, ToggleSidebarAction } from "../actions";

export const toggleSidebar = (): ToggleSidebarAction => {
  return {
    type: ActionType.TOGGLE_SIDEBAR,
  };
};

export const selectMenuItem = (id: string): SelectMenuItemAction => {
  return {
    type: ActionType.SELECT_MENU_ITEM,
    payload: id,
  };
};
