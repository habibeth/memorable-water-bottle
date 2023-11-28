import { useEffect, useState } from "react";
import Bottle from "../Bottole/Bottole";
import './Bottoles.css'

const Bottles = () => {
    const [bottoles, setBottoles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottoles(data))
    }, [])
    return (
        <div>
            <h2>Welcome Memorable Bottles Days</h2>
            <div className="bottole-container">
                {
                    bottoles.map(bottole => <Bottle
                        bottole={bottole}
                        key={bottole?.id}
                    ></Bottle>)
                }
            </div>

        </div>
    )
}

export default Bottles;