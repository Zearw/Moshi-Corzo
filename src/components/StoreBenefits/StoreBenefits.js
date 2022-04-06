import "./StoreBenefits.css";

const StoreBenefits = () => {
  const benefits = [
    {
      imgBenefit: "../../assets/icons/beneficio1.png",
      title: "PAGALO COMO QUIERAS",
      detail: "Pagá con cualquier tarjeta de crédito, débito y Mercado Pago",
    },
    {
      imgBenefit: "../../assets/icons/beneficio2.png",
      title: "LO PEDÍS, LO TENÉS",
      detail:
        "Despachamos tu pedido en menos de 24 horas. Hacemos envíos a todo el país.",
    },
    {
      imgBenefit: "../../assets/icons/beneficio3.png",
      title: "ESCRIBINOS POR WHATSAPP",
      detail: "Estamos para responder tus dudas y asesorarte, escribinos!",
    },
    {
      imgBenefit: "../../assets/icons/beneficio4.png",
      title: "DESCUENTOS EN EL SHOWROOM",
      detail: "Vení y pagá en 3 cuotas sin interés y 10% off en efectivo",
    },
  ];

  return (
    <div className="container_benefits">
      {benefits.map((benefit, i) => {
        return (
          <div className="benefits" key={i}>
            <div className="benefit_img">
              <img src={benefit.imgBenefit} alt={benefit.imgBenefit}></img>
            </div>
            <div className="benefit_info">
              <h3 className="benefit_title">{benefit.title}</h3>
              <p className="benefit_descrip">{benefit.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoreBenefits;
