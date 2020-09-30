import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import {
  addSubMenus,
  addToCart,
  changeActive,
  changeSelectedMenu,
} from "../redux/actions";

const MenuBar = (props) => {
  const [menu, setMenu] = useState(props.mainMenu);

  useEffect(() => {
    setMenu(props.mainMenu);
  }, [props.mainActive === true]);

  const menuClick = (index) => {
    setMenu(menu.items[index]);
    props.changeActive(false);
  };

  const subClick = (index,menuName) => {
    var subMenus = menu.items[index].subMenus;
    props.addSubMenus(subMenus);
    props.changeSelectedMenu(menuName);
  };

  const addToCartClick = (product, e) => {
    props.addToCart(product);
    e.preventDefault();
  };

  return (
    <div id="menubar">
      {menu.key === "main"
        ? menu.items.map((menu, index) => (
            <Card
              onClick={() => menuClick(index)}
              key={index}
              name={menu.name}
              price={menu.price}
              src={`../../public/${menu.image}`}
            />
          ))
        : menu.key !== "main"
        ? menu.items.map((menu, index,e) => (
            <Card
              cartClick={(e) => addToCartClick(menu, e)}
              onClick={() => subClick(index,menu.name)}
              key={index}
              name={menu.name}
              price={!menu.subMenus ? menu.price : "Seçenekler"}
              src={`../../public/${menu.image}`}
            />
          ))
        : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mainMenu: state.mainMenu,
    mainActive: state.mainActive,
  };
};

export default connect(mapStateToProps, {
  addSubMenus,
  addToCart,
  changeActive,
  changeSelectedMenu,
})(MenuBar);
