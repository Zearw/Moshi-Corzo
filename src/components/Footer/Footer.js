import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="container_footer">
      <div className="logo_footer">
        <Link to={"/"}>
          <img src="../assets/icons/ala.png" alt="iconomarca" />
        </Link>
      </div>
      <div className="footer_contacto">
        <div>
          <span>
            <InstagramIcon /> @moshicafe
          </span>
        </div>
        <div>
          <span>
            <FacebookIcon /> /moshicafe
          </span>
        </div>
        <div>
          <span>
            <WhatsAppIcon /> +54 351 3547897{" "}
          </span>
        </div>
        <div>
          <span>
            <PhoneIcon /> 351-3547897{" "}
          </span>
        </div>
      </div>
      <div className="footer_informacion">
        <Link to={"/"}>
          <p>Sobre Moshi</p>
        </Link>
        <Link to={"/"}>
          <p>Ventas por mayor</p>
        </Link>
        <Link to={"/"}>
          <p>Términos y condiciones</p>
        </Link>
        <Link to={"/"}>
          <p>Preguntas frecuentes</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
