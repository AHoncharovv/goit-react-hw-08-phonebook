import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(authSelectors.getUserName);
    const onClick = () => {
        dispatch(authOperations.logOut())
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Hello, { user ?? user }</h2>
            <button type='button' onClick={onClick}>Exit</button>
        </div >   
    )
}