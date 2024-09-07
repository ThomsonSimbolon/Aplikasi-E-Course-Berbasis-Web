import { Container, Row, Col } from "react-bootstrap";

const SyaratKetenPage = () => {
  return (
    <div className="syaratK">
      <Container data-aos="fade-up" className="px-4 px-lg-0">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold">Syarat & Ketentuan</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>

        <h2>Syarat</h2>
        <p>Syarat yang harus dipenuhi</p>
        <h2>Ketentuan</h2>
        <p>Ketentuan yang harus dipenuhi</p>

        <h3>Contoh Syarat</h3>
        <ul>
          <li>Syarat 1</li>
          <li>Syarat 2</li>
          <li>Syarat 3</li>
        </ul>

        <h3>Contoh Ketentuan</h3>
        <ul>
          <li>Ketentuan 1</li>
          <li>Ketentuan 2</li>
          <li>Ketentuan 3</li>
        </ul>
        <p>Lainnya...</p>
        <p>
          <strong>Note:</strong> Silahkan tetapkan link ke halaman syarat dan
          ketentuan yang dapat dilihat di halaman ini.
        </p>
        <p>
          <strong>Catatan:</strong> Perubahan syarat dan ketentuan akan
          diinformasikan kepada pendaftar secara tertulis.
        </p>
        <p>
          <strong>Perubahan Syarat dan Ketentuan:</strong> Perubahan yang
          dilakukan akan diinformasikan kepada pendaftar secara tertulis.
        </p>
      </Container>
    </div>
  );
};

export default SyaratKetenPage;
