import './Bottole.css'

const Bottle = ({bottole}) =>{
    console.log(bottole)
    const {name, img} = bottole;
    return(
        <div className="bottle">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>            
        </div>
    )
}

export default Bottle;