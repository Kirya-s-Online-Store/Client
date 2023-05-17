import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import styles from '../styles/NavBar.module.css';
import { observer } from 'mobx-react-lite'


const NavBar = observer( () => {

  const {user} = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
    
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className={styles.logo} to={SHOP_ROUTE}>Kyrya's Store</NavLink>
          
          {user.isAuth ?
            <Nav className="ml-auto">
                {user.isAdmin && <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>}
                <Button variant="outline-light" onClick={() => navigate(BASKET_ROUTE)} className='ml-2'>Корзина</Button>
                <Button variant="outline-light" onClick={() => logOut()} className='ml-2'>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto">
                <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>

  )
}
)

export default NavBar