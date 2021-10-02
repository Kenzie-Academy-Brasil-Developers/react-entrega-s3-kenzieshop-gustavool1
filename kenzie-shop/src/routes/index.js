import {Switch, Route} from 'react-router-dom'
import Cart from '../pages/cart'
import Dashboard from '../pages/dashboard'
const Router = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Dashboard/>
            </Route>
            
            <Route exact path='/cart'>
                <Cart/>
            </Route>
        </Switch>
    )
}
export default Router