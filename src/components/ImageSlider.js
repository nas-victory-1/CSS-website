import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div>
        <img src="/assets/eventImage.png" alt="event" className="eventImage" />
        <h1>CSS fresher's orientation</h1>
        <p>
          A program to introduce and orient freshers on what the society is
          about.
        </p>
        <p>30th January, 2024</p>
      </div>
      <div>
        <img src="/assets/eventImage.png" alt="event" className="eventImage" />
        <h1>CSS fresher's orientation</h1>
        <p>
          A program to introduce and orient freshers on what the society is
          about.
        </p>
        <p>30th January, 2024</p>
      </div>
    </Slider>
  );
};

export default ImageSlider;
