import { ActionType } from "../action-types";
import { Action } from "../actions";

interface SidebarState {
  isOpen: boolean;
  menuItemId: string | null;
}

const INIT_STATE: SidebarState = {
  isOpen: true,
  menuItemId: null,
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
  }
  return state;
};

export default reducer;
