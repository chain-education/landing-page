import React, { useState, useEffect } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setSticky(true);
        } else if (window.scrollY < 90) {
            setSticky(false);
        }
    }

    return (
        <div className={`header${sticky ? ' sticky' : ''}`}>
            <Navbar light expand="md">
                <Container>
                    <NavbarBrand href="/">ChainEducation</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#classrooms">Classrooms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#instructors">Instructors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#whitepaper">Whitepaper(coming soon)</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://chaineducation.niceboard.co/" target={_blank}>Job Board</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
