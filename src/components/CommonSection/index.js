import './CommonSection.scss';
function CommonSection({ title }) {
  return (
    <section className="common-section">
      <div className="grid wide">
        <div className="row">
          <div className="col l-6">
            <h2 className="common-section-title">{title}</h2>
          </div>
          <div className="col l-6">
            {/* <!-- breadcrumb --> */}
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Shop</a>
              </li>
              <li className="breadcrumb-item">
                <span>san pham</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonSection;
