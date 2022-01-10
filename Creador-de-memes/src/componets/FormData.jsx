import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Paper,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import ImageContext from "../context";
import styles from "./Formulario.module.css";

const arrayImagenes = [
  { value: "casa-en-llamas", name: "Casa en llamas" },
  { value: "dicaprio", name: "Di Caprio" },
  { value: "gato", name: "Gatito" },
  { value: "futurama", name: "Futurama" },
  { value: "pensando", name: "Pensando" },
];

const FormData = ({ onChangeExportar }) => {
  const {
    imagen,
    linea1,
    linea2,
    onChangeImagen,
    onChangeLinea1,
    onChangeLinea2,
  } = useContext(ImageContext);

  const imgUrl = `/images/${imagen}.jpg`;

  return (
    <Paper style={{ width: "90%", padding: "5%" }}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Image</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={imagen}
            onChange={onChangeImagen}
          >
            {arrayImagenes.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {imagen !== "" ? (
          <>
            <Grid item xs={12} m={2} className={styles.container}>
              <TextField
                className={styles.input}
                onChange={onChangeLinea1}
                placeholder="Linea 1"
              />

              <TextField
                onChange={onChangeLinea2}
                placeholder="Linea 2"
                className={styles.input}
              />
            </Grid>
            <Grid>
              <Button
                onClick={() => onChangeExportar()}
                variant="contained"
                color="primary"
                size="small"
              >
                Exportar
              </Button>
            </Grid>
            <div className={styles.meme} id="meme">
              <span>{linea1}</span>
              <br />
              <span>{linea2}</span>
              {imagen !== "" && (
                <img src={imgUrl} alt="" width="100%" height={500} />
              )}
            </div>
          </>
        ) : (
          <Alert severity="info">
            <AlertTitle>Seleccione una imagen</AlertTitle>
          </Alert>
        )}
      </Grid>
    </Paper>
  );
};

export default FormData;
