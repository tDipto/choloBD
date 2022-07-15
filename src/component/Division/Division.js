import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import DivisionHead from "../Shared/DivisionHead/DivisionHead";

const Division = () => {
  const { division } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <DivisionHead division={division}></DivisionHead>
      <Footer></Footer>
      {/* <p>Hello Barisal</p> */}
    </>
  );
};

export default Division;
