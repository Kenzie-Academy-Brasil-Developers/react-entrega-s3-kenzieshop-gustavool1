const cartReducer = (state = [], action) =>{
    console.log(action)
    switch(action.type){
        case "@cart/ADD":
            
            const { product } = action
            return [...state, product]

        case "@cart/remove":
            const { id } = action;
            const newList = state.filter((product) => product.id !== id)
            return newList
        default:
            return state
    }
}
export default cartReducer