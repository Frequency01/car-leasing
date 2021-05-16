import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputField from "./inputField";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "3.375rem",
    fontFamily: "NekstBlackBold",
  },
  button: {
    width: "23rem",
    height: "4.25rem",
    backgroundColor: "#FF9514",
    borderRadius: "2rem",
    marginTop: "2rem",
    outline: "none",
  },
  p: {
    color: "white",
    fontFamily: "NekstBlackBold",
    fontSize: "1.875rem",
    margin: "0",
  },
}));

function MakeOrder() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <div id="zatemnenie">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="okno"
          >
            <Grid item xs={6}>
              <h1 className={classes.h1}>Онлайн-заявка</h1>
              <p href="#">
                Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на
                все вопросы
              </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <InputField />
                </Grid>
                <Grid item xs={6}>
                  <InputField />
                </Grid>
              </Grid>
              <span>
                Нажимая на кнопку «Оставить заявку», я даю согласие на обработку
                персональных данных
              </span>
              <button className={classes.button}>
                <a href="#" class="close">
                  Оставить заявку
                </a>
              </button>
            </Grid>
          </Grid>
        </div>
        <a href="#zatemnenie">
          <button className={classes.button}>
            <p className={classes.p}>Оставить заявку</p>
          </button>
        </a>
      </Grid>
    </>
  );
}

export default MakeOrder;
