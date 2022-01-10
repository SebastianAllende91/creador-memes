import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import html2canvas from "html2canvas";
import FormData from "./FormData";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const onChangeExportar = (event) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        align="center"
        className={styles.title}
      >
        Creador de Memes
      </Typography>
      <Grid container p={2} textAlign="center" sx={{ minWidth: 120 }}>
        <FormData onChangeExportar={onChangeExportar} />
      </Grid>
    </Container>
  );
};

export default Formulario;
