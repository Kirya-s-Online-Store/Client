import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import styles from '../styles/NavBar.module.css';
import { observer } from 'mobx-react-lite'


const NavBar = observer( () => {

  const {user} = useContext(Context)
    
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className={styles.logo} to={SHOP_ROUTE}>Kyrya's Store</NavLink>
          
          {user.isAuth ?
            <Nav className="ml-auto">
                <Button variant="outline-light">Админ панель</Button>
                <Button className="ml-4" variant="outline-light">Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto">
                <Button variant="outline-light" onClick = {() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>

  )
}
)

export default NavBar