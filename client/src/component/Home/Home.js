import Carosol from "../Carosol/Carosol.js";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";
import MainBody from "./MainBody";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Carosol></Carosol>
      <MainBody></MainBody>
      {/* desh er most popular places dekhano lagbe MostPopularData theke mapping kore */}

      <Footer></Footer>
    </>
  );
};

export default Home;
