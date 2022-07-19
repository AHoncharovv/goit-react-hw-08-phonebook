import React from 'react';
import {  NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <>
            <nav className={styles.navigation}>
                <NavLink to='/register'
                    className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} 
                >
                    Registration
                </NavLink>
                <NavLink to='/login'
                    className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}
                >
                    Login
                </NavLink>
                <NavLink to='/contacts'
                    className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}
                >
                    Phonebook
                </NavLink>
            </nav>
            <hr />
        </>
    )
}