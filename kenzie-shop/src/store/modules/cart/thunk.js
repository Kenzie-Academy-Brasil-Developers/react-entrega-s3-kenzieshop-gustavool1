import { addToCart, removeFromCart } from "./actions"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export const addToCartThunk = ( item ) => {
        return (dispatch, getState) => {
                const { cart } = getState() 
                const filteredItem = cart.filter((product)=>product.id === item.id)
                if(!filteredItem.length){
                        const cartStorage = JSON.parse(localStorage.getItem('@cart'))|| []
                        cartStorage.push(item)
                        localStorage.setItem("@cart", JSON.stringify(cartStorage))
                        toast.success('Adicionado ao carrinho com sucesso')
                        dispatch(addToCart(item))
                }else{
                        toast.error('Impossível adicionar o mesmo item ao carrinho')
                }
        }
        
}

export const removeFromCartThunk = ( item ) => {
        return (dispatch, getState) => {
                const { cart } = getState()
                const newList = cart.filter((product)=> product.id !== item.id)
                localStorage.setItem("@cart", JSON.stringify(newList))
                toast.success('Removido com sucesso')
                dispatch(removeFromCart(newList))
        }
}