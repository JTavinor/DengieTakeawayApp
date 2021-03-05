import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuCard from "./MenuCard";
import MenuLocator from "./MenuLocator";
import Basket from "./Basket";
import LoadingIcon from "../common/loadingIcon";

import { restaurantAdded } from "../../store/order";
import { loadMenu } from "../../store/menus";

import "../../css/menu/menu.css";

function Menu({ location }) {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.entities.menu.list.menu);
  const loading = useSelector((state) => state.entities.menu.loading);

  useEffect(() => {
    dispatch(loadMenu(location.state.menuId));
    dispatch(restaurantAdded({ restaurant: location.state.restaurant }));
  }, [dispatch, location.state.menuId, location.state.restaurant]);

  return (
    <React.Fragment>
      {loading && <LoadingIcon />}
      {!loading && menu && (
        <React.Fragment>
          <div className="menuPageContainer">
            <div className="menuContainer">
              <div style={{ width: "15%" }}>
                <MenuLocator menu={menu} />
              </div>
              <div className="menuCardContainer">
                <MenuCard menu={menu} />
              </div>

              <div className="menuBasketContainer">
                <Basket />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Menu;
