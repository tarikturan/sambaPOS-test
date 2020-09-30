import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MenuBar from "../components/MenuBar";
import SubMenus from "../components/SubMenus"
import { connect } from "react-redux";

const Home = (props) => (
  <div id="Home">
    <Navbar />
    <MenuBar />
    { props.mainActive === false ? <Sidebar /> :null}
    <SubMenus/>
  </div>
);


const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        mainActive: state.mainActive
    }
}
export default connect(mapStateToProps) (Home);
