export const addSubMenus = (subMenus) => {
  return { type: "ADD_SUB_MENUS", payload: subMenus };
};

export const addToCart = (product) => {
  return { type: "ADD_TO_CART", payload: product };
};

export const changeActive = (isActive) => {
  return { type: "CHANGE_ACTIVE", payload: isActive };
};

export const changeSelectedSubMenu = (subMenu) => {
  return { type: "SELECTED_SUBMENU", payload: subMenu}
}

export const changeSelectedMenu = (menu) => {
  return { type: "SELECTED_MENU", payload:menu}
}
