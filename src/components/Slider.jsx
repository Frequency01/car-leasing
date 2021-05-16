import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HookedCarousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "black",
    height: "29.5625rem",
    width: "84rem",
    borderRadius: "2rem",
    position: "relative",
    overflow: "hidden",
  },
  grid: {
    padding: "3rem",
  },
  gridWithText: {
    position: "relative",
    zIndex: "1",
  },
  h1: {
    color: "white",
    width: "40rem",
    marginTop: "4.375rem",
    marginLeft: "4.375rem",
    fontFamily: "NekstBlackBold",
    fontSize: "3.375rem",
  },
  p: {
    color: "white",
    fontSize: "1.875rem",
    marginLeft: "4.375rem",
    fontFamily: "NekstBlackBold",
  },
  button: {
    fontFamily: "GilroyBold",
    backgroundColor: "#FF9514",
    cursor: "pointer",
    border: "solid #FF9514",
    borderRadius: "0.75rem",
    marginLeft: "4.375rem",
    color: "white",
    outline: "none",
  },
  img: {
    position: "absolute",
    bottom: "0",
    right: "0",
  },
}));

function Slider() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={12} className={classes.background}>
          <Grid item className={classes.gridWithText}>
            <h1 className={classes.h1}>Авто в лизинг для физических лиц</h1>
            <p className={classes.p}>Получите машину за 5 дней</p>
            <button className={classes.button}>
              <p>Оставить заявку</p>
            </button>
          </Grid>
          <img src="img/С ФОНОМ.png" alt="" className={classes.img} />
          {/* <HookedCarousel /> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Slider;
