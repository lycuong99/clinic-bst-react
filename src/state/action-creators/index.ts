import { ActionType } from "../action-types";
import { ToggleSidebarAction } from "../actions";

export const toggleSidebar = (): ToggleSidebarAction => {
  return {
    type: ActionType.TOGGLE_SIDEBAR,
  };
};
