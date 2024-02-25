import classNames from 'classnames'
import React, { useRef, useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import NAVBAR from '../../assets/copy/Navbar'
import ROUTES from '../../Routes/Routes'
import generics from '../../styles/generics/generics.module.scss'

import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
    const location = useLocation().pathname
    let tabIndex = -1
    if (location === ROUTES.NEW) tabIndex = 0
    if (location === ROUTES.INVOICES) tabIndex = 1

    const [activeIndex, setActiveIndex] = useState(
        tabIndex === -1 ? 0 : tabIndex
    )
    const [sliderOpacity, setSliderOpacity] = useState(tabIndex === -1 ? 0 : 1)
    const [fromLogin, setFromLogin] = useState(tabIndex === -1 ? true : false)

    const navRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        updateSliderPosition()
    }, [activeIndex, sliderOpacity])

    const updateSliderPosition = () => {
        const nav = navRef.current
        const slider = sliderRef.current

        if (nav && slider) {
            const activeTab = nav.children[activeIndex] as HTMLElement
            const distance = Math.abs(slider.offsetLeft - activeTab.offsetLeft)
            const sliderSpeed = 0.5
            const duration = Math.max(distance / sliderSpeed, 300)

            slider.style.transition = fromLogin
                ? 'left 0ms, width 0s, opacity 0.5s ease-out'
                : `left ${duration}ms ease-out, width 0.5s ease-out, opacity 0.5s ease-out`
            slider.style.width = `${activeTab.offsetWidth}px`
            slider.style.left = `${activeTab.offsetLeft}px`
            slider.style.opacity = `${sliderOpacity}`
            slider.style.pointerEvents = sliderOpacity === 0 ? 'none' : 'all'

            sliderOpacity === 1 && setFromLogin(false)
        }
    }

    const buildTab = (tab: { LABEL: string; PATH: string }, index: number) => (
        <NavLink
            key={`navbar-tab-${tab.LABEL}`}
            to={tab.PATH}
            className={({ isActive }) =>
                isActive && sliderOpacity === 1 ? style.selected : ''
            }
            onClick={() => {
                setActiveIndex(index)
                setSliderOpacity(1)
            }}
        >
            {tab.LABEL}
        </NavLink>
    )

    return (
        <div
            id={style.navbar}
            className={classNames(
                generics.inline,
                generics['position-relative']
            )}
        >
            <div
                className={classNames(
                    style.logo,
                    generics['margin-20'],
                    generics['position-absolute']
                )}
            />
            <div
                className={classNames(
                    style['logo-background'],
                    generics['position-absolute']
                )}
            />

            <div
                ref={navRef}
                className={classNames(
                    style.links,
                    generics.inline,
                    generics['position-relative'],
                    generics['margin-20'],
                    generics['vertical']
                )}
            >
                {buildTab(NAVBAR.NEW, 0)}

                {/* TODO: list of invoices are tied to user authentication. */}
                {false && buildTab(NAVBAR.INVOICES, 1)}

                <NavLink
                    className={classNames(
                        generics['position-absolute'],
                        style.login,
                        tabIndex === -1 ? style.selected : ''
                    )}
                    to={NAVBAR.LOGIN.PATH}
                    onClick={() => {
                        setSliderOpacity(0)
                        setFromLogin(true)
                    }}
                >
                    {NAVBAR.LOGIN.LABEL}
                </NavLink>

                <span
                    ref={sliderRef}
                    className={generics['position-absolute']}
                />
            </div>
        </div>
    )
}

export default Navbar
