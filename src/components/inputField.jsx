import "../App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#F3F3F4",
    borderRadius: "1rem",
    width: "23rem",
    height: "4.25rem",
    margin: "0",
    fontFamily: "NekstBlackBold",
    fontSize: "3rem",
    color: "#575757",
  },

  input: {
    position: "absolute",
    top: "7.6rem",
    bottom: "0",
    left: "1rem",
    width: "50%",
  },
}));

function InputField({ setInputValue, inputValue, text, min, max, rubs }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={{ position: "relative" }}
      >
        <p style={{ fontFamily: "Gilroy" }}>{text}</p>
        <FilledInput
          onChange={(e) => setInputValue(e.target.value)}
          id="filled-adornment-weight"
          endAdornment={
            <span
              position="end"
              style={{
                fontFamily: "NekstBlackBold",
                fontSize: "3rem",
                color: "#575757",
              }}
            >
              {rubs}
            </span>
          }
          aria-describedby="filled-weight-helper-text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
        />
        <input
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          type="range"
          min={min}
          max={max}
          value={inputValue}
          className={classes.input}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Grid>
    </>
  );
}

export default InputField;

// <Grid
//           container
//           direction="row"
//           justify="space-evenly"
//           alignItems="center"
//         >
//           <p>Стоимость автомобиля</p>
//           <p>Первоначальный взнос</p>
//           <p>Срок лизинга</p>
//         </Grid>
//         <Grid
//           container
//           direction="row"
//           justify="flex-start"
//           alignItems="center"
//         >
//           <TextField
//             id="filled-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             variant="filled"
//             style={{ marginRight: "17.8125rem" }}
//           />

//           <TextField
//             id="filled-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             variant="filled"
//             style={{ marginRight: "17.8125rem" }}
//           />
//           <TextField
//             id="filled-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             variant="filled"
//           />
//         </Grid>
//       </Grid>
