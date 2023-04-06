import React from 'react'
import { authRoutes, publicRoutes } from '../routes'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'

function AppRouter() {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element = {<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element = {<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    )
}

export default AppRouter