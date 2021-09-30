import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../../store/modules/cart/thunk'
import './style.css'
const Card = ({ item }) =>{
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(addToCartThunk(item))
    }
    return (
        <div className='card-container'>
            <div>
                <img src = {item.img} alt= ''/>
                <p>{item.name}</p>
                <p>R${item.price}</p>
                <button onClick={handleClick}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export  default Card