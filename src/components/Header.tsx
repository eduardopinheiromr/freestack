import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  const menu = [
    { href: "/", label: "Home" },
    { href: "/", label: "Ranking" },
    { href: "/", label: "FAQ" },
    { href: "/", label: "Login" },
    { href: "/", label: "Cadastro" },
  ];
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">freeStack</Navbar.Brand>
        <Nav className="ms-auto">
          {menu.map((item, key) => (
            <Link href={item.href} passHref key={key}>
              <Nav.Link>{item.label}</Nav.Link>
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
