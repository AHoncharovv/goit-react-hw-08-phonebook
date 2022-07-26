import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import UserMenu from 'components/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';

export default function Navigation() {
    
    const isLogged = useSelector(authSelectors.getIsLogged);

    return (
        <>
            <nav className={styles.navigation}>
                {isLogged ?
                    <div className={styles.container}>
                    <NavLink to='/contacts'
                        className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}>
                        Phonebook
                    </NavLink>
                    <UserMenu />
                    </div>
                    :
                    <>
                        <NavLink to='/register'
                        className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} >
                        Registration
                    </NavLink>
                    <NavLink to='/login'
                        className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}>
                        Login
                    </NavLink>
                    </>
                }  
            </nav>
            <hr />
        </>
    )
}