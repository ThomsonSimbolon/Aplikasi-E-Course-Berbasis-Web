import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { semuaKelas, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  // pembatasan kelasTerbaru sebanyak 6 item dan membuat navigate dan mengarahkan ke page kelas
  const limitedSemuaKelas = semuaKelas.slice(0, 6);
  const handleKelasClick = () => {
    navigate("/kelas");
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100" data-aos="fade-up">
        <Container className="header-box">
          <Row className="d-flex align-items-center pt-lg-5">
            <Col lg={6}>
              <h1>Selamat Datang di Kelas Kami</h1>
              <p>
                Kami adalah sebuah platform yang menyediakan informasi, materi,
                dan layanan yang berkaitan dengan pembelajaran React JS. Kami
                menyediakan kelas gratis yang dapat dikembangkan dan
                dimodifikasi sesuai kebutuhan Anda.
              </p>
              <button className="btn btn-primary btn-lg me-2 rounded shadow">
                Daftarkan Diri
              </button>
              <button className="btn btn-promo btn-lg me-2 rounded shadow">
                Lihat Promo
              </button>
            </Col>
            <Col lg={6} className="pt-lg-5 pt-0">
              <img src={HeroImage} alt="Hero Image" className="hero-image" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Section Kelas */}
      <div className="kelas w-100 min-vh-100">
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
            {limitedSemuaKelas.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  data-aos="fade-up"
                  className="rounded shadow"
                >
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
          <Row>
            <Col className="text-center">
              <button
                className="btn bg-transparent btn-next btn-lg rounded-2 shadow"
                onClick={handleKelasClick}
              >
                Lihat Semua Kelas{" "}
                <i className="fa-solid fa-chevron-right ms-3 py-0"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section Testimonials */}
      <div className="testimonials w-100 min-vh-90 py-5">
        <Container data-aos="fade-up" className="px-3 px-lg-0">
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold">Testimonials</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <div>
                {dataSwiper.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div className="card border-0 shadow">
                        <div className="card-body">
                          <p className="card-text desc">{data.desc}</p>
                        </div>
                        <div className="card-footer bg-transparent text-start border-0">
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
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section FaQ */}
      <div className="faq w-100 min-vh-90 py-5">
        <FaqComponent />
      </div>
    </div>
  );
};

export default HomePage;
