import PropTypes from 'prop-types'
import './Bottole.css'

const Bottle = ({ bottole, HandleAddToCart }) => {
    
    const { name, img, price } = bottole;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price:${price}</p>
            <button onClick={()=>HandleAddToCart(bottole)}>Purchase</button>
        </div>
    )
}

Bottle.propTypes ={
    bottole: PropTypes.object.isRequired,
    HandleAddToCart: PropTypes.func.isRequired
}

export default Bottle;