import { GREY } from ".";
import { FooterNav } from "./footerNav";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: GREY }}
      className="border-top py-0 text-center">
      <FooterNav />
      <span>
        <i className="bi bi-bullseye"></i> Your Biz Cards
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
