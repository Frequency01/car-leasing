import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  img: {
    position: "absolute",
    bottom: "0",
    right: "0",
    maxWidth: "50rem",
    height: "auto",
  },
}));
const HookedCarousel = () => {
  const classes = useStyles();
  const [images, setImages] = useState([
    "img/С ФОНОМ.png",
    "https://st-gdefon.gallery.world/wallpapers_original/378452_gallery.world.jpg",
    " https://funpick.ru/wp-content/uploads/2018/03/krut-mash-4.png",
    "img/С ФОНОМ.png",
  ]);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  };
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 1
  );

  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 1
      ? [
          ...activeImageSourcesFromState,
          ...images.slice(0, 5 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <div>
      {/* render images */}
      {imageSourcesToDisplay.map((image, index) => (
        <img key={index} src={image} alt="" className={classes.img} />
      ))}
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HookedCarousel;
