import img1 from "../../assets/images/13.jpg";
import img2 from "../../assets/images/4.jpg";
import img3 from "../../assets/images/6.jpg";
import "./Carosol.css";
const Carosol = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide d-inline "
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="" src={img1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="" src={img2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="" src={img3} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carosol;
