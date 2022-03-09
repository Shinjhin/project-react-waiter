import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'

const NavBar = () => {
    return(
        <div >
            <Navbar bg="primary" className="rounded mt-3 mb-3">
                <Container>
                    <h5><NavLink className={styles.h5} to="/">Waiter.app</NavLink></h5>
                    <h6><NavLink  className={styles.h6} to="/">Home</NavLink></h6>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;