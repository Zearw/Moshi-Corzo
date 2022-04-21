import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import dataBase from "../../helpers/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function ResponsiveDialog() {
  //states/context
  const { dataForm, setDataForm, cartList, sumTotal } = useContext(CartContext);
  const [openForm, setOpenForm] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const [fechaHoy] = useState(() => {
    let fecha = new Date();
    let hoy =
      fecha.getFullYear() +
      "-" +
      (fecha.getMonth() + 1) +
      "-" +
      fecha.getDate();
    return hoy;
  });
  const [order, setOrder] = useState({
    buyer: { dataForm },
    items: cartList.map((it) => {
      return {
        id: it.id,
        title: it.title,
        price: it.price,
      };
    }),
    date: fechaHoy,
    total: sumTotal(),
  });

  //query
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //Open Close Modal

  const openFormData = () => {
    setOpenForm(true);
  };

  const closeFormData = () => {
    setOpenForm(false);
  };

  //funciones form
  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrder = { ...order, buyer: dataForm };
    setOrder({ ...order, buyer: dataForm });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderToFirebase = collection(dataBase, "orders");
    const orderDoc = await addDoc(orderToFirebase, prevOrder);
    setSuccessOrder(orderDoc.id);
  };

  return (
    <div>
      <Button variant="outlined" onClick={openFormData}>
        Finalizar Compra
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={openForm}
        onClose={closeFormData}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Formulario del comprador"}
        </DialogTitle>
        <DialogContent>
          {successOrder ? (
            <div>
              <h3>Orden generada correctamente</h3>
              <p>Su numero de orden es: {successOrder}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                value={dataForm.name}
              />
              <input
                type="number"
                name="phone"
                placeholder="Telefono"
                onChange={handleChange}
                value={dataForm.phone}
              />
              <input
                type="mail"
                name="email"
                placeholder="mail"
                onChange={handleChange}
                value={dataForm.email}
              />
              <DialogActions>
                <Button type="submit" onClick={closeFormData} autoFocus>
                  Enviar Datos
                </Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
