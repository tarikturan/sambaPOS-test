import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeActive } from "../redux/actions";

const Navbar = (props) => {
  const [cart, setCart] = useState(props.cart);

  const setActive = () => {
    {
      props.mainActive === false ? props.changeActive(true) : null;
    }
  };

  useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);
  return (
    <div className="navbar" id="navbar">
      <p className="logo">SambaTEST</p>
      <div onClick={setActive}>
        <img id="main-menu-icon" src="../../public/icons/main-menu.svg" />
        <a>ANA MENÜ</a>
      </div>
      {cart.length !== 0 ? (
        <p id="cart">Sepetinizde {cart.length} ürün var</p>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mainActive: state.mainActive,
    cart: state.cart,
  };
};
export default connect(mapStateToProps, { changeActive })(Navbar);
