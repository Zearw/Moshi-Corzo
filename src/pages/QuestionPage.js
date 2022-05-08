import "./QuestionPage.css";
import { useState } from "react";
//components
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuestionPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container_preg">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ¿Cómo comprar online en Moshi café?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>
            -Navegá por las categorías y elegí los productos que quieras
            comprar. <br />
            -Realizá tu pedido e ingresá tus datos, revisa si los productos que
            seleccionaste son los correctos. Luego hace click en “Comprar” y
            completa tus datos. <br />
            -Una vez corroborado los datos desde aca, nos comunicaremos con vos
            para efectuar el pago!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ¿Donde puedo visitarlos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Por el momento no contamos con un showroom, pero podes comunicarte
            con nosotros a traves de nuestras redes sociales!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ¿Cómo puedo contactarme con Moshi café?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Podés contactarnos por: <br />
            Whatsapp: +54 351 3547897
            <br />
            Facebook: /moshicafe <br />
            Instagram: @moshicafe
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
