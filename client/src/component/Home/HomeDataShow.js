const DataShow = ({ data }) => {
  const { titleEng, img, title } = data;
  return (
    <div className="flex-container">
      <div class="flex-items">
        <a href={`/${titleEng}`}>
          <img src={img} alt="one" />
          <div class="flex-text">
            <h2 className="text-center">{title}</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DataShow;
