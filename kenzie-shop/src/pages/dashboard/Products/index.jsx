import { useSelector } from "react-redux"
import Card from "../Card"
import './style.css'
const Products = () => {
    const all = useSelector((state)=>state)
    const productsList = useSelector((state)=>state.products)

    console.log(all)
    console.log(productsList)
    return (
        <div className='products-container'>
            {productsList.map((product)=><Card key={product.id} item={product}/>)}
        </div>
    )
}

export default Products