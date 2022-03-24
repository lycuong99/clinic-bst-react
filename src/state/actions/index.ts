import { ActionType } from "../action-types";

export interface ToggleSidebarAction {
  type: ActionType.TOGGLE_SIDEBAR;
}

export interface SelectMenuItemAction {
  type: ActionType.SELECT_MENU_ITEM;
  payload: string;
}
export type Action =
  | ToggleSidebarAction
  | SelectMenuItemAction
  ;
