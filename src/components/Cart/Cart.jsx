import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({cart, HandleToRemove}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <div className="cart-bottle">
                {
                    cart.map(bottle=> <div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={()=>HandleToRemove(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    HandleToRemove: PropTypes.func.isRequired
}

export default Cart;