import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";
import CardForAll from "./cardForAll";

const Home = () => {
  const cards = useMyCards();

  const HEADER_DESCRIPTION =
    "Welcome to our website, Here you can find business cards for cooperation .";

  return (
    <>
      <PageHeader
        title={
          <>
            <i className="bi bi-bullseye"></i> Your Biz Cards
          </>
        }
        description={HEADER_DESCRIPTION}
      />

      <div className="row d-flex flex-wrap justify-content-around gap-2 mt-2">
        {!cards.length ? (
          <div className="d-flex justify-content-around mt-2">
            <CardForAll
              img={
                "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
              }
              name={"Avi"}
              description={"Project manager"}
              address={"Tel Aviv"}
              phone={"058-9648238"}
            />

            <CardForAll
              img={
                "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
              }
              name={"Tal"}
              description={"Editor"}
              address={"Holon"}
              phone={"058-8369412"}
            />

            <CardForAll
              img={
                "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
              }
              name={"Oriya"}
              description={"Project manager"}
              address={"Bat Yam"}
              phone={"058-7215684"}
            />

            <CardForAll
              img={
                "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
              }
              name={"Sahar"}
              description={"Project manager"}
              address={"Elad"}
              phone={"058-1395476"}
            />
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
