import React from 'react'
import { Container, Form, Card } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import Button from "react-bootstrap/Button";
import { useLocation, NavLink } from 'react-router-dom';


function Auth() {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
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
                            variant={"primary"}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form>

				</Form>
			</Card>
		</Container>
	)
}

export default Auth