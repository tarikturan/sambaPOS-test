import React, { useState, useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";

const SubMenus = (props) => {
  const [menu, setMenu] = useState(props.selectedSubMenu);

  useEffect(() => {
    setMenu(props.selectedSubMenu);
  }, [props.selectedSubMenu]);

  const selectThis = (item) => {
    console.log(item);
  };
  return (
    <div id="sub-menus">
      {menu
        ? menu.items.map((item, index) => (
            <Card
              onClick={() => selectThis(item)}
              key={index}
              name={item.name}
              price={item.price}
              src={`../../public/${item.image}`}
            />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    subMenus: state.subMenus,
    selectedSubMenu: state.selectedSubMenu,
    selectedMenu: state.selectedMenu,
  };
};

export default connect(mapStateToProps)(SubMenus);
