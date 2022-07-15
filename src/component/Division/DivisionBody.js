import { DivisionData } from "./DivisionData";
import DivisionDataShow from "./DivisionDataShow";
import "./DivisionDataShow.css";
const DivisionBody = () => {
  return (
    <>
      <h2 className="p-3 m-3"> জনপ্রিয় স্থানসমূহ</h2>
      <div className="division-container">
        {DivisionData.map((data) => (
          <DivisionDataShow data={data} />
        ))}
      </div>
      <section>
        {/* eikhne oi division er most popular places gula dekhano lagbe */}
      </section>
    </>
  );
};

export default DivisionBody;
