import React, { useState } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputField from "./inputField";
import MakeOrder from "./MakeOrder";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "2.9375rem",
  },
  input: {
    background: "#F3F3F4",
    borderRadius: "1rem",
    width: "26.6875rem",
  },
  p: {
    width: "50rem",
    fontSize: "3.375rem",
    fontFamily: "NekstBlackBold",
  },
  p2: {
    fontFamily: "NekstBlackBold",
    fontSize: "3.375rem",
    margin: "0",
  },
}));

function Calculator() {
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  const [carPrice, setCarPrice] = useState(3300000);
  const [contribution, setContribution] = useState(0);
  const [leaseTerm, setLeaseTerm] = useState(0);

  let procents = number / 100 / 12;
  let priceWithcontribution = carPrice - contribution;

  let paymentPerMounth =
    priceWithcontribution *
    (procents + procents / (Math.pow(1 + procents, leaseTerm) - 1));

  let amoutOfContract = contribution + leaseTerm * paymentPerMounth;

  const Contribution = () => {
    let procents = number / 100;
    let contr = procents * Number(carPrice);
    setContribution(Math.round(contr, "₽"));
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.grid}
      >
        <p className={classes.p}>Рассчитайте стоимость автомобиля в лизинг</p>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <InputField
              text={"Стоимость автомобиля"}
              inputValue={carPrice}
              setInputValue={setCarPrice}
              min={1000000}
              max={6000000}
              rubs={"₽"}
            />
          </Grid>
          <Grid item xs={3} style={{ position: "relative" }}>
            <InputField
              text={"Первоначальный взнос"}
              inputValue={contribution}
              setInputValue={setContribution}
              min={carPrice * 0.1}
              max={carPrice * 0.6}
              // min={1}
              // max={60}
              rubs={`${number}%`}
            />
            <form noValidate autoComplete="off">
              <TextField
                style={{ position: "absolute" }}
                id="filled-basic"
                label="%"
                variant="filled"
                onChange={(e) => {
                  setNumber(e.target.value);
                  Contribution();
                }}
                value={number}
              />
            </form>
          </Grid>
          <Grid item xs={3}>
            <InputField
              text={"Срок лизинга"}
              inputValue={leaseTerm}
              setInputValue={setLeaseTerm}
              min={1}
              max={60}
              rubs={"MEC"}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3} style={{ fontFamily: "Gilroy" }}>
            <p>Сумма договора лизинга</p>
            <p className={classes.p2}>
              {number && contribution && leaseTerm && carPrice
                ? Math.round(amoutOfContract).toLocaleString("ru")
                : 0}
              ₽
            </p>
          </Grid>
          <Grid item xs={3} style={{ fontFamily: "Gilroy" }}>
            <p>Ежемесячный платеж от</p>
            <p className={classes.p2}>
              {number && contribution && leaseTerm && carPrice
                ? Math.round(paymentPerMounth).toLocaleString("ru")
                : 0}
              ₽
            </p>
          </Grid>
          <Grid item xs={3}>
            <MakeOrder />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Calculator;

// // let payment = price - advance * (rate / (1 + rate) - term - 1);
// let wtf = (price - advance) * ((rate + rate / (1 + rate)) ^ (term - 1));
// let yyy = price - advance * (rate / (1 + rate) - term - 1);
// let zzz = (price - advance) * (1 + rate / (term - 1));

// (((price * ((1 - advance / price) * Math.pow(1 + rate / 12, term) - oni)) /
//   (Math.pow(1 + rate / 12, term) - 1)) *
//   rate) /
// 12;

// let payment = price * (rate + rate / (Math.pow(1 + rate, term) - 1));
// console.log(Math.round(payment));
