import { useDispatch } from 'react-redux'
import { addToCartThunk, removeFromCartThunk } from '../../../store/modules/cart/thunk'
import './style.css'
const Card = ({ item, isRemovable}) =>{
    const dispatch = useDispatch()
    const handleClickAdd = () =>{
        dispatch(addToCartThunk(item))
    }
    const handleClickRemove = () =>{
        
        dispatch(removeFromCartThunk(item))
    }
    return (
        <div className='card-container'>
            <div>
                <img src = {item.img} alt= ''/>
                <p>{item.name}</p>
                <p>R${item.price}</p>
                { isRemovable ?
                (
                    <button onClick={handleClickRemove}>Remover do  carrinho</button>
                )
                :(
                    <button onClick={handleClickAdd}>Adicionar ao carrinho</button>
                )}
                
            </div>
        </div>
    )
}

export  default Card