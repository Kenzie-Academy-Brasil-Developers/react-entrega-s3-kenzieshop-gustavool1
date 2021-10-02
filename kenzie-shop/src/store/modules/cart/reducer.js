const cartReducer = (state = [], action) =>{
    console.log( action)
    switch(action.type){
        case "@cart/ADD":
            
            const { product } = action
            return [...state, product]

        case "@cart/remove":
            const { newList } = action

            return [...newList]
        default:
            return state
    }
}
export default cartReducer