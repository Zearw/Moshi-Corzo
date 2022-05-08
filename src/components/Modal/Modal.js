import "./Modal.css";
import { useState, useContext } from "react";
//context
import CartContext from "../../context/CartContext";
//firebase
import dataBase from "../../helpers/firebase";
import { addDoc, collection } from "firebase/firestore";
//components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export default function ResponsiveDialog() {
  //states/context
  const { dataForm, setDataForm, cartList, sumTotal, clearCart } =
    useContext(CartContext);

  //Estado Form
  const [openForm, setOpenForm] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [errorMail, setErrorMail] = useState(false);
  //Estado Pedido
  const [successOrder, setSuccessOrder] = useState(false);
  //Estado Fecha
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
  //Datos de la Orden
  const [order, setOrder] = useState({
    buyer: { dataForm },
    items: cartList.map((it) => {
      return {
        id: it.id,
        title: it.title,
        price: it.price,
        quantity: it.quantity,
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

  const closeFormData = (successOrder) => {
    setOpenForm(false);

    if (successOrder) {
      clearCart();
    }
  };

  //Funciones form

  const handleChange = (e) => {
    if (e.target.name === "email2") {
      setDataForm({ ...dataForm, [e.target.name]: e.target.value });
      if (e.target.value !== dataForm.email) {
        setErrorMail(true);
        setHelperText("Los mails ingresados no coinciden");
      } else {
        setErrorMail(false);
        setHelperText("");
      }
    } else {
      setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.email === dataForm.email2) {
      setErrorMail(false);
      setHelperText("");
      let prevOrder = { ...order, buyer: dataForm };
      setOrder({ ...order, buyer: dataForm });
      pushOrder(prevOrder);
    } else {
      setErrorMail(true);
      setHelperText("Los mails ingresados no coinciden");
    }
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
        onClose={() => closeFormData(successOrder)}
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
              <TextField
                margin="dense"
                type="text"
                label="Apellido y Nombre"
                name="name"
                onChange={handleChange}
                value={dataForm.name}
                required={true}
              />
              <TextField
                margin="dense"
                type="number"
                label="Número Telefónico"
                name="phone"
                onChange={handleChange}
                value={dataForm.phone}
                required={true}
              />
              <TextField
                margin="dense"
                error={errorMail}
                type="email"
                label="Mail"
                name="email"
                onChange={handleChange}
                value={dataForm.email}
                helperText={helperText}
                required={true}
              />
              <TextField
                margin="dense"
                error={errorMail}
                type="email"
                label="Confirmar Mail"
                name="email2"
                onChange={handleChange}
                value={dataForm.email2}
                helperText={helperText}
                required={true}
              />

              <DialogActions>
                <Button type="submit" autoFocus>
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
