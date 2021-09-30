import Header from "./header"
import './style.css'
import Products from "./Products"
const Dashboard = () =>{
    return (
        <>
        <div>
            <Header/>
        </div>
        <div className='market-items'>
            <Products/>
        </div>
        </>
    )
}

export default Dashboard