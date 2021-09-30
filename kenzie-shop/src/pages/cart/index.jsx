import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from '../../store/modules/cart/actions'
import Header from "../dashboard/header"
import './style.css'
const Cart = ( ) =>{
    const cartItems = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const handleDelete = (id) =>{
        dispatch(removeFromCart(id))
    }
    return (
        <>
        <Header/>
        <div className='cart-container'>
            
            <h1>Carrinho</h1>
            {cartItems.map((item)=>(
                <div className='cart-item' key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <p>Preço: R${item.price}</p>
                    <button onClick={()=>handleDelete(item.id)}>Deletar</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default Cart 