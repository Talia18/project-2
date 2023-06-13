import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About <i className="bi bi-bullseye"></i> Ecommerce
        </>
      }
      description="We are Company Ecommerce, And we present business companies in the
          world, here in Israel since 2020. We believe that through this website
          you will be able to make it easier for yourself in finding business
          companies. We started this business because when We was looking for
          businesses to work with it took us a very long time, and we had to
          make it easy for other people. We want to give you a feeling of
          comfort on the site."
    />
  );
};

export default About;
