import "./PremiumCatalogueButton.css";

const PremiumCatalogueButton = ({ pdf }) => {
  return (
    <div className="catalogue-wrap">

      {/* DOWNLOAD */}

      <a
        href={pdf}
        download
        className="catalogue-left"
      >
        <div className="catalogue-icon">
          ⬇
        </div>

        <div>
          <h4>DOWNLOAD</h4>
          
        </div>
      </a>

      {/* CURVE */}

      <div className="catalogue-divider"></div>

      {/* VIEW */}

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="catalogue-right"
      >
        <div className="catalogue-icon">
          👁
        </div>

        <div>
          <h4>VIEW</h4>
          
        </div>
      </a>

    </div>
  );
};

export default PremiumCatalogueButton;