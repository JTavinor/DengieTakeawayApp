import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

import MenuCard from "./menuCard";
import MenuLocator from "./menuLocator";
import Basket from "./basket";
import LoadingIcon from "../common/loadingIcon";

import { loadMenu } from "../../store/menus";

import ApiError from "../common/error";
import RestaurantDetails from "./restaurantDetails";
import BasketModal from "./basketModal";
import { restaurantAdded } from "../../store/order";

// General menu page for a restaurant
// Contains a locator (takes you to a specific section of the menu), basket, restaurant details, and the menu
// On small screens the basket is accessible as a modal from a sticky banner at the base of the screen
// On mid/small screens, each menu section is collapsable
function Menu({ match }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.list.menu);
  const loading = useSelector((state) => state.menu.loading);
  const error = useSelector((state) => state.menu.error);
  const subTotal = useSelector((state) => _.round(state.order.subTotal, 2));

  // Loads the menu the the DB, getting the restaurant name from the db
  // Adds specific restaurant info to the order
  // If the user navigates to a different restaurants menu the order will be reset
  useEffect(() => {
    dispatch(loadMenu(match.params.name));
    dispatch(
      restaurantAdded({
        restaurant: match.params.name,
      })
    );
  }, [dispatch, match.params.name]);

  return (
    <React.Fragment>
      {/* Loading icon whislt waiting for data */}
      {loading && <LoadingIcon />}
      {!loading && menu && (
        <div className="menuPageContainer flexRow">
          <div className="menuLocatorContainer">
            <MenuLocator menu={menu} />
          </div>
          <div className="menuCardContainer">
            <RestaurantDetails />
            <MenuCard menu={menu} />
          </div>

          <div className="menuBasketContainer">
            <Basket sticky={true} />
          </div>
        </div>
      )}

      {/* Only rendered on small screens. Turns the basket into a sticky banner at the bottom of the screen that opens the basket as a modal */}
      <div className="smallScreenBasket" onClick={() => setModalIsOpen(true)}>
        <FontAwesomeIcon icon={faShoppingBasket} size="3x" />
        <h4 style={{ marginLeft: "20px" }}>Subtotal: £{subTotal}</h4>
      </div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} center>
        <BasketModal onClose={() => setModalIsOpen(false)} />
      </Modal>
      {error && <ApiError error={error} />}
    </React.Fragment>
  );
}

export default Menu;
