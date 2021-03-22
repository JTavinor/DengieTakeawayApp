import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuCard from "./menuCard";
import MenuLocator from "./menuLocator";
import Basket from "./basket";
import LoadingIcon from "../common/loadingIcon";

import { restaurantAdded } from "../../store/order";
import { loadMenu } from "../../store/menus";

import ApiError from "../common/error";
import RestaurantDetails from "./restaurantDetails";

function Menu({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu(match.params.name));
  }, [dispatch, match.params.name]);

  const menu = useSelector((state) => state.menu.list.menu);
  const loading = useSelector((state) => state.menu.loading);
  const error = useSelector((state) => state.menu.error);

  return (
    <React.Fragment>
      {loading && <LoadingIcon />}
      {!loading && menu && (
        <React.Fragment>
          <div className="menuPageContainer">
            <div className="flexRow">
              <div className="menuLocatorContainer">
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
