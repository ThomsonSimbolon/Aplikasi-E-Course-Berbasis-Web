import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container data-aos="fade-up" className="px-4 px-lg-0">
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas Terbaru</h1>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} data-aos="fade-up" className="rounded">
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="img-fluid w-100 mb-4 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="kt d-flex align-items-center px-3 pb-3 justify-content-between">
                    <p className="m-0 text-secondary fw-bold">{kelas.price}</p>
                    <button className="btn btn-success rounded-1 shadow-sm">
                      {kelas.buy}
                    </button>
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

export default KelasPage;
