import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from '../../store/modules/cart/actions'
import Card from "../dashboard/Card"
import Header from "../dashboard/header"
import './style.css'
import Total from "./Total"
const Cart = ( ) =>{
     const cartItems = JSON.parse(localStorage.getItem('@cart'))
    const cartItemss = useSelector((state)=>state)
    console.log(cartItemss)
    return (
        <>
        <Header/>
        <div className='cart-container'>
            <Total/>
            <h1>Carrinho</h1>
            {cartItems && cartItems.map((item)=>(
                <Card key={item.id}item={item} isRemovable={true}/>
            ))}
        </div>
        </>
    )
}

export default Cart 