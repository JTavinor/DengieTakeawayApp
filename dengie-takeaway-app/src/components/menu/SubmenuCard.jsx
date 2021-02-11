import React from "react";
import "../../css/menu/subMenuCard.css";
import ItemCard from "./ItemCard";

function SubmenuCard({ addItemToBasket, subMenu }) {
  const renderSubMenu = (subMenu) => {
    const subMenuList = subMenu.map((item) => (
      <li key={item.itemName}>
        <ItemCard
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          itemPrice={item.itemPrice}
          itemOptions={item.itemOptions}
          addItemToBasket={addItemToBasket}
        />
      </li>
    ));
    return <ul>{subMenuList}</ul>;
  };

  return (
    <div className="subMenuCardContainer" id={subMenu.category}>
      <h1 className="subMenuCardHeader">{subMenu.category}</h1>
      <p>{subMenu.description}</p>
      {renderSubMenu(subMenu.items)}
    </div>
  );
}

export default SubmenuCard;

//POTENTIAL FOR FIXING MENULOCATOR WITH SCROLLING

// const [scroll, setScroll] = useState(200);

// useEffect(() => {
//   // // console.log(subMenu.title);
//   // var x = document.getElementById(subMenu.title);
//   // // Get it's position in the viewport
//   // var bounding = x.getBoundingClientRect();
//   // // Log the results
//   // console.log(subMenu.title, bounding);
// });
// // console.log(scroll);

// const listenToScroll = () => {
//   const winScroll =
//     document.body.scrollTop || document.documentElement.scrollTop;

//   if (
//     (document.body.scrollTop || document.documentElement.scrollTop) > scroll
//   ) {
//     console.log(true);
//     // setScroll(winScroll);
//   }
// };
// window.addEventListener("scroll", listenToScroll);
