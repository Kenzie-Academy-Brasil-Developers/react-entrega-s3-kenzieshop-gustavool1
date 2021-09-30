import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.css'
const Header = () =>{
    return(
        <div className='header'>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        
                    </IconButton>
                    <Button color="inherit"><Link to='/'>Login</Link></Button>
                    <Button color="inherit"><Link to='/cart'>Carrinho</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
export default Header