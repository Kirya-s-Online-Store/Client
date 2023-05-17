import React, { useContext } from 'react'
import { authRoutes, publicRoutes, adminRoutes } from '../routes'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(()=> {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAdmin && adminRoutes.map(({path, Component})=>
                <Route key={path} path={path} element = {<Component/>} exact/>
            )}
            {user.isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element = {<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element = {<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    )
})

export default AppRouter