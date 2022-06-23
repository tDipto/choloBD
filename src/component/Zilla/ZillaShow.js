/* eslint-disable jsx-a11y/img-redundant-alt */
const ZillaShow = ({ zillaNames, zillaTag }) => {
  /* console.log(zillaNames, zillaTag); */
  return (
    <>
      {zillaNames
        .filter((pd) => pd.distName === zillaTag)
        .map((pd2) => (
          <div class="text-center">
            <div class="d-inline-block">
              <div class="card" style={{ width: "40rem", height: "20rem" }}>
                <img
                  class="card-img-top"
                  src={pd2.disImg}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <p class="card-text">{pd2.distDName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ZillaShow;
