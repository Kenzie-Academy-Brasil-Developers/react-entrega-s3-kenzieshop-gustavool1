import { addToCart } from "./actions"
export const addToCartThunk = ( item ) => {
        return addToCart(item)
}