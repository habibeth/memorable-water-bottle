import { useEffect, useState } from "react";
import Bottle from "../Bottole/Bottole";
import './Bottoles.css'
import { addToLS, getStoredCart, removeItemLS } from "../../Utilites/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottoles, setBottoles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottoles(data))
    }, [])
    useEffect(() => {
        // console.log(bottoles.length);
        if (bottoles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const savedCart = [];

            for(const id of storedCart){
                const cartData = bottoles.find(bottle=> bottle.id ===id);
                savedCart.push(cartData);
            }
            setCart(savedCart)
        }
    }, [bottoles])
    const HandleAddToCart = (bottole) => {
        // console.log(bottole)
        const newCart = [...cart, bottole];
        setCart(newCart)
        addToLS(bottole.id)
    }
    const HandleToRemove=(id)=>{
        const remaining = cart.filter(bottle=> bottle.id !== id);
        setCart(remaining)
        removeItemLS(id)
    }
    // console.log(cart)
    return (
        <div>
            <h2>Welcome Memorable Bottles Days</h2>
            <Cart 
            cart={cart}
            HandleToRemove={HandleToRemove}
            ></Cart>
            <div className="bottole-container">
                {
                    bottoles.map(bottole => <Bottle
                        bottole={bottole}
                        HandleAddToCart={HandleAddToCart}
                        key={bottole?.id}
                    ></Bottle>)
                }
            </div>

        </div>
    )
}

export default Bottles;