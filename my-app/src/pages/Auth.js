import React, { useContext, useState } from 'react'
import { Container, Form, Card, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Button from "react-bootstrap/Button";
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';


const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const click = async () => {
        
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(firstName, lastName, email, password)
            }
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <Form className="d-flex flex-column">
                    {!isLogin ?
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваше имя..."
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        :
                        <div></div>
                    }
                    {!isLogin ?
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите вашу фамилию..."
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        :
                        <div></div>
                    }
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            className='mt-3'
                            variant={"primary"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    )
})

export default Auth