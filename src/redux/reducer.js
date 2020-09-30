import data from "js-yaml-loader!../../public/menu.yaml";

const INITIAL_STATE = {
  menus: data.menus,
  mainMenu: data.menus[0],
  subMenus: null,
  cart: [],
  mainActive: true,
  selectedSubMenu: null,
  selectedMenu: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SUB_MENUS":
      return { ...state, subMenus: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "CHANGE_ACTIVE":
      return { ...state, mainActive: action.payload };
    case "SELECTED_SUBMENU":
      return { ...state, selectedSubMenu: action.payload };
    case "SELECTED_MENU":
      return { ...state, selectedMenu: action.payload };
    default:
      return state;
  }
};
