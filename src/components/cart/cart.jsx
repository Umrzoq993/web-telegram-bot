import { totalPrice } from "../../units/total-price";
import Button from "../button/button";
import "./cart.css";

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart__container">
      <p>Umumiy narx: {totalPrice(cartItems)}</p>

      <Button
        type="checkout"
        title={`${cartItems.length === 0 ? "Buyurtma" : "To'lov"}`}
        disabled={cartItems.length === 0}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
