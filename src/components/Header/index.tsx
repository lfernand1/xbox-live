
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useAuthContext } from '../../context/AuthContext'

import {
    Container,
    NavContainer,
    Button
} from './styles'



export function Header (){
    const {logout} = useAuthContext()

    const navigate = useNavigate()

    function handleHome(){
        navigate('/home')
    }

    function handleLogout(){
        logout()
        navigate('/')
    }

    function handleToFavoritePage(){
        logout()
        navigate('/favoritePage')
    }

    function handleToRegisterGamePage(){
        navigate('/registerGame')
    }

    function handleToRegisterUserPage(){
        navigate('/userPage')
    }


    return (
        <Container>
            <img  src={Logo} alt='logo xbox'/>

            <NavContainer>
                <Button
                    onClick={handleHome}
                > 
                    Home
                </Button>

                <Button
                    onClick={handleLogout}
                > 
                    Exit
                </Button>

                <Button
                    onClick={handleToFavoritePage}
                > 
                    Favs
                </Button>

                <Button
                    onClick={handleToRegisterGamePage}
                > 
                    Register Game
                </Button>

                <Button 
                    onClick={handleToRegisterUserPage}
                > 
                    Users
                </Button>
            </NavContainer>
        </Container>
    )
}