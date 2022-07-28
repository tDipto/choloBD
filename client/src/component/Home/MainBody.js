import { homeData } from "./HomeData";
import HomeDataShow from "./HomeDataShow";
import "./MainBody.css";
const MainBody = () => {
  return (
    <section className="main-section">
      <h2 className="m-0 p-4">বাংলাদেশের বিভাগীয় শহরসমূহ </h2>
      <div className="flex-container">
        {" "}
        {homeData.map((data) => (
          <HomeDataShow data={data}></HomeDataShow>
        ))}
      </div>
    </section>
  );
};

export default MainBody;
