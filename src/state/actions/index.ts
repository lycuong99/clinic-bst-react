import { ActionType } from "../action-types";

export interface ToggleSidebarAction {
  type: ActionType.TOGGLE_SIDEBAR;
}
export type Action = ToggleSidebarAction | { type: string };
