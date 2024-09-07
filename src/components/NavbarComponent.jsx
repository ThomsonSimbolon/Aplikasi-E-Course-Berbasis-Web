import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={changeColor ? "color-active" : ""}
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand fs-3 fw-bold">
          E-Course
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="shadow-sm" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>

          <div className="text-center">
            <Button className="btn bg-transparent btn-outline-nav rounded shadow-sm">
              Join With Me &rarr;
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
