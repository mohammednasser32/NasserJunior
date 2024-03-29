import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import pencil from './../assets/misc/pencil.png'
import englishComics from './../assets/misc/english-comics.png'
import arabicComics from './../assets/misc/arabic-comics.png'
import comicsSeries from './../assets/misc/comics-series.png'
import work from './../assets/misc/work.png'
import about from './../assets/misc/about.png'

function Navigator() {

  return (
    <div className="p-4 grey-bg">
        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/illustrations" className="remove-decoration d-flex flex-column" >
              <div className="navigator-image-container">
                <Image src={pencil} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">Illustrations</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics/english" className="remove-decoration d-flex flex-column" >
              <div className="navigator-image-container">
                <Image src={englishComics} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">English Comics</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics/arabic" className="remove-decoration d-flex flex-column" >
              <div className="navigator-image-container">
                <Image src={arabicComics} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">Arabic Comics</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/comics-series" className="remove-decoration d-flex flex-column" >
              <div className="navigator-image-container">
                <Image src={comicsSeries} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">Comics Series</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/work" className="remove-decoration d-flex flex-column">
              <div className="navigator-image-container">
                <Image src={work} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">Projects</h2>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center p-4">
            <Link to="/about" className="remove-decoration d-flex flex-column">
              <div className="navigator-image-container">
                <Image src={about} className="navigator-image"/>
              </div>
              <h2 className="text-center hand-text">About</h2>
            </Link>
          </Col>
        </Row>
    </div>
  );
}

export default Navigator;
