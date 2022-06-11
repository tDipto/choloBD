import { useParams } from "react-router-dom";
import divisions from "../../../assets/Division.json";
import ZillaShow from "../../Zilla/ZillaShow";
const ZillaHead = () => {
  const { division, zilla } = useParams();

  return (
    <>
      {divisions
        .filter((pd) => pd.divName === division)
        .map((pd2) => (
          <ZillaShow zillaNames={pd2.districts} zillaTag={zilla}></ZillaShow>
        ))}
    </>
  );
};

export default ZillaHead;
