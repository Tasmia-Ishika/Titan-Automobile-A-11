import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={45} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#products">Instore</Nav.Link>
                            {/* <Nav.Link href="home#experts">Experts</Nav.Link> */}
                           
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blogs">Blogs
                            </Nav.Link>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="/addProduct">Add Product
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/manageInventory">Manage Inventory
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/myItem">My Items
                                    </Nav.Link>
                                </>
                            }



                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Signout</button>
                                    :

                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
