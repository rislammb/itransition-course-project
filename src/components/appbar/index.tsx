import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiDark, CiLight } from "react-icons/ci";

import classes from "./styles.module.css";

interface AppbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Appbar({ darkMode, toggleTheme }: AppbarProps) {
  return (
    <Navbar className={classes.navbar}>
      <Container fluid>
        <Navbar.Brand href="#" className="flex-grow-1 text-white">
          Navbar
        </Navbar.Brand>
        <div className="d-flex gap-2 align-items-center">
          <Nav.Link href="#action2">Link</Nav.Link>
          <Button
            variant="outline-dark"
            className="rounded-circle text-white"
            onClick={toggleTheme}
          >
            {darkMode ? <CiDark /> : <CiLight />}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
