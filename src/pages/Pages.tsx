import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Spinner from '../components/Spinner/Spinner'
import ROUTES from '../Routes/Routes'
import generics from '../styles/generics/generics.module.scss'

import './Pages.module.scss'

const Navbar = lazy(() => import('../components/Navbar/Navbar'))
const Login = lazy(() => import('./Login/Login'))
const New = lazy(() => import('./New/New'))

const Pages: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <Navbar />

                <div id="PAGES" className={generics['padding-20']}>
                    <Routes>
                        <Route
                            path={ROUTES.NEW}
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <New />
                                </Suspense>
                            }
                        />

                        {/* TODO: list of invoices are tied to user authentication. */}
                        <Route path={ROUTES.INVOICES} element={<Spinner />} />

                        {/* TODO: toggle login or settings based on authentication. */}
                        <Route
                            path={ROUTES.LOGIN}
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <Login />
                                </Suspense>
                            }
                        />
                        {/* TODO: add user specific data, should be able to modify also. */}
                        <Route path={ROUTES.SETTINGS} element={<Spinner />} />

                        {/* RE-ROUTES */}
                        <Route
                            path={ROUTES.BASE}
                            element={<Navigate replace to={ROUTES.NEW} />}
                        />
                    </Routes>
                </div>
            </Suspense>
        </BrowserRouter>
    )
}

export default Pages
