import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
    
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail)
    const onClick = () => {
        dispatch(authOperations.logOut())
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Hello, { email }</h2>
            <Button variant="primary" type="submit" onClick={onClick}>
                Exit
            </Button>
        </div >   
    )
};