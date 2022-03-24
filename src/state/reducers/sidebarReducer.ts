import { ActionType } from "../action-types";
import { Action } from "../actions";

interface SidebarState {
  isOpen: boolean;
  menuItemId: string | null;
  selectedItems: string[];
}

const INIT_STATE: SidebarState = {
  isOpen: true,
  menuItemId: null,
  selectedItems: [],
};
const reducer = (
  state: SidebarState = INIT_STATE,
  action: Action
): SidebarState => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case ActionType.SELECT_MENU_ITEM:
      return {
        ...state,
        selectedItems: [action.payload],
      };
  }
  return state;
};

export default reducer;
