import { Container, Accordion, Row, Col } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  // Memisahkan data berdasarkan ID
  const faqColumn1 = faq.filter((item) => item.id >= 1 && item.id <= 3);
  const faqColumn2 = faq.filter((item) => item.id >= 4 && item.id <= 6);

  return (
    <div className="faq w-100 min-vh-90 py-5">
      <Container data-aos="fade-up" className="px-3 px-lg-0">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold">FAQ</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Accordion defaultActiveKey="0">
              {faqColumn1.map((item) => (
                <Accordion.Item
                  eventKey={item.id.toString()}
                  key={item.id}
                  className="mb-3 rounded shadow-sm"
                >
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col lg={6}>
            <Accordion defaultActiveKey="1">
              {faqColumn2.map((item) => (
                <Accordion.Item
                  eventKey={item.id.toString()}
                  key={item.id}
                  className="mb-3 rounded shadow-sm"
                >
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
