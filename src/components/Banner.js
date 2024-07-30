import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImgReact from "../assets/img/react-logo.svg";  // Replace with the correct path
import headerImgNode from "../assets/img/node-logo.svg";    // Replace with the correct path
import headerImgExpress from "../assets/img/express-logo.png"; // Replace with the correct path
import headerImgMongoDB from "../assets/img/mongodb-logo.png"; // Replace with the correct path
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [currentImg, setCurrentImg] = useState(headerImgReact); // Initial image
  const toRotate = ["Frontend Developer", "Backend Developer", "Software Developer"];
  const period = 200;

  // Logo array
  const logos = [headerImgReact, headerImgNode, headerImgExpress, headerImgMongoDB];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  useEffect(() => {
    const imgTicker = setInterval(() => {
      setCurrentImg(logos[(loopNum + 1) % logos.length]);
      setLoopNum((prev) => (prev + 1) % logos.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imgTicker);
  }, [loopNum]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Akashdeep`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Frontend Developer", "Backend Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a third-year B.Tech student at LPU, specializing in Computer Science and Engineering. With a strong proficiency in DSA and web development technologies, I aim to become a skilled MERN stack developer. My projects include an e-commerce platform, a real-time chat application, a cryptocurrency dashboard, and an Internshala automation tool, all showcasing my ability to create functional and efficient web applications.</p>

                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={currentImg} alt="Header Img" className="header-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
