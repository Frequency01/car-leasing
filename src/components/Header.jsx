import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: "1.3125rem",
  },
  h1: {
    color: "#FF9514",
    fontSize: "3rem",
    margin: "0",
  },
  secondContainer: {
    fontFamily: "GilroyBold",
  },
  hr: {
    borderLeft: "0.2rem solid #C4C4C4",
    height: "1.875rem",
    margin: "1.0625rem",
  },
  lizingCompany: {
    color: "rgba(17, 17, 17, 0.5)",
    fontSize: "1rem",
    fontFamily: "Gilroy",
  },
  button: {
    fontFamily: "GilroyBold",
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "solid #FF9514",
    borderRadius: "0.75rem",
    outline: "none",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.main}
      >
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <h1 className={classes.h1}>LeasingCar</h1>
            <hr className={classes.hr} />
            <span className={classes.lizingCompany}>лизинговая компания</span>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className={classes.secondContainer}
          >
            <nav>
              <ul>
                <li>
                  <p href="#">Лизинг</p>
                  <ul>
                    <li>
                      <a href="#">Для личного пользования</a>
                    </li>
                    <li>
                      <a href="#">Для юридических диц</a>
                    </li>
                    <li>
                      <a href="#">Калькулятор</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <p style={{ margin: "2rem" }}>Каталог</p>
            <p style={{ marginRight: "2rem" }}>О нас</p>
            <button className={classes.button}>
              <p style={{ color: "#FF9514" }}>Оставить заявку</p>
            </button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
