import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ZillaHead from "../Shared/ZillaHead/ZillaHead";
const Zilla = () => {
  const { division, zilla } = useParams();
  console.log(zilla);
  return (
    <>
      <Navbar></Navbar>
      <ZillaHead></ZillaHead>
    </>
  );
};

export default Zilla;
