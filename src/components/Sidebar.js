import React, { useState } from "react";
import { changeSelectedSubMenu } from "../redux/actions";
import { connect } from "react-redux";

const Sidebar = (props) => {
  
  console.log(props.selectedMenu)
  return (
    <div id="sidebar">
      {props.selectedMenu}
      {props.subMenus
        ? props.subMenus.map((subMenu) =>
            props.menus.map((menu, index) =>
              menu.key === subMenu ? (
                <div
                  onClick={() => props.changeSelectedSubMenu(menu)}
                  key={index}
                  className="sidebar-item"
                >
                  <a>{menu.description}</a>
                </div>
              ) : null
            )
          )
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    subMenus: state.subMenus,
    cart: state.cart,
    selecTedSubMenu: state.selecTedSubMenu,
    selectedMenu: state.selectedMenu
  };
};

export default connect(mapStateToProps, { changeSelectedSubMenu })(Sidebar);
