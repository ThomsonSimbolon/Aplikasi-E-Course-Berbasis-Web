import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer w-100 pt-5 pb-4 bg-dark text-white">
      <Container className="px-3 px-lg-0">
        <Row>
          {/* Column content footer */}
          <Col md={3}>
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              ligula id erat consectetur fermentum.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Email: 123@example.com
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Phone: +123 456 7890
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Address: Street 123, City, Country
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Help</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Subscribe</h5>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control rounded-0 shadow"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary shadow rounded-0 mt-2"
              >
                Subscribe
              </button>
              <p className="mt-3 text-start">
                We respect your privacy and will not share your email address
                with third parties.
              </p>
            </form>
          </Col>
        </Row>
      </Container>
      <p className="text-center my-0">
        © {new Date().getFullYear()} E-Course. All rights reserved.
      </p>
    </div>
  );
};

export default FooterComponent;
