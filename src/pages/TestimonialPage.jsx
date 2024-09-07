import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container data-aos="fade-up" className="px-4 px-lg-0">
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold">Testimonial</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {testimonial.map((data) => {
              return (
                <Col lg={6} key={data.id} className="shadow-sm mb-2">
                  <div className="p-2">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img
                        src={data.image}
                        alt="People"
                        className="card-img-top"
                      />
                      <div>
                        <h5 className="my-0">{data.name}</h5>
                        <p className="my-0">{data.skill}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
