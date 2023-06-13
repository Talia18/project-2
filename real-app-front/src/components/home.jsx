import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

const Home = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title={
          <>
            <i className="bi bi-bullseye"></i> Ecommerce
          </>
        }
        description={
          "Hello to our website, Here you can fint some of business."
        }
      />

      <div className="row d-flex flex-wrap justify-content-around gap-2 mt-2">
        {!cards.length ? (
          <div
            id="carouselExample"
            className="carousel slide"
            style={{ width: "900px", height: "500px" }}>
            <div
              className="carousel-inner"
              style={{ width: "900px", height: "500px" }}>
              <div className="carousel-item active">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 4) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default Home;
