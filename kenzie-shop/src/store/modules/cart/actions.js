export const addToCart = (product) =>({
    type:"@cart/ADD",
    product
})

export const removeFromCart = ( id ) =>({
    type: "@cart/remove",
    id
}) 