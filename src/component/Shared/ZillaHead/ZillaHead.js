import { useParams } from "react-router-dom";
import { divisions } from "../../../assets/Division";
import ZillaShow from "../../Zilla/ZillaShow";
const ZillaHead = () => {
  const { division, zilla } = useParams();

  return (
    <div style={{ backgroundColor: "#dbd8e3", height: "90vh" }}>
      {divisions
        .filter((pd) => pd.divName === division)
        .map((pd2) => (
          <ZillaShow zillaNames={pd2.districts} zillaTag={zilla}></ZillaShow>
        ))}
    </div>
  );
};

export default ZillaHead;
