import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer__copyright">
        {`Илья Шнырев `}&copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
