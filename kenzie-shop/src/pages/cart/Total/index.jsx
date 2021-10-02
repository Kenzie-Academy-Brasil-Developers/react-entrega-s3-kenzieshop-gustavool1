import { useSelector } from 'react-redux'
import'./style.css'
const Total = () => {
    const cart = JSON.parse(localStorage.getItem('@cart'))
    return(
        <div className='total'>
            <h2>Total</h2>
            {cart ? 
            (
                <p>R${cart.reduce((prev,cur)=>prev+cur.price,0) }</p>
            )
            :(
                <p>R$0</p>
            )}
        </div>
    )
}
export default Total