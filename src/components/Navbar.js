import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(
    useSelector((store) => {
      console.log(store);
    })
  );
  return (
    <div className="nav-center">
      <h3>Redux toolkit</h3>
      <div className="nav-container">
        {/* <Testing /> */}
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
