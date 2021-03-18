import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuCard from "./MenuCard";
import MenuLocator from "./MenuLocator";
import Basket from "./Basket";
import LoadingIcon from "../common/loadingIcon";

import { restaurantAdded } from "../../store/order";
import { loadMenu } from "../../store/menus";

import "../../css/menu/menu.css";
import ApiError from "../common/error";
import RestaurantDetails from "./restaurantDetails";

function Menu({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu(match.params.name));
    dispatch(
      restaurantAdded({
        restaurant: match.params.name,
      })
    );
  }, [dispatch, match.params.name]);

  const menu = useSelector((state) => state.entities.menu.list.menu);
  const { restaurantAddress } = useSelector((state) => state.entities.menu);
  const loading = useSelector((state) => state.entities.menu.loading);
  const error = useSelector((state) => state.entities.menu.error);

  console.log(restaurantAddress);
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
                <RestaurantDetails />
                <MenuCard menu={menu} />
              </div>

              <div className="menuBasketContainer">
                <Basket />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {error && <ApiError error={error} />}
    </React.Fragment>
  );
}

export default Menu;
