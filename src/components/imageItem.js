import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import curiosity from "../avatars/rover-c.jpg";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const ImageItem = (props) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  let isFaved = (id) => {
    if (props.favs.some((image) => image["id"] === id)) {
      return true;
    } else {
      return false;
    }
  };

  const useRoverImage = (rover) => {
    if (rover === "Curiosity") {
      return curiosity;
    }
  };

  const FavHeart = (props, id) =>
    isFaved(props.image.id) ? (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
          <FavoriteBorderIcon
            className="fav-icon"
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => props.removeFav(props.image)}
          />
        ) : (
          <FavoriteIcon
            className="fav-icon-hover"
            fontSize="large"
            style={{ color: "red" }}
            onClick={() => props.removeFav(props.image)}
          />
        )}
      </div>
    ) : (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
          <FavoriteIcon
            className="fav-icon-hover"
            fontSize="large"
            style={{ color: "red" }}
            onClick={() => props.addFav(props.image)}
          />
        ) : (
          <FavoriteBorderIcon
            className="fav-icon"
            fontSize="large"
            style={{ color: "red" }}
            onClick={() => props.addFav(props.image)}
          />
        )}
      </div>
    );

  return (
    <>
      <Dialog open={open} maxWidth="xl" onClose={() => setOpen(false)}>
        <DialogContent style={{ background: "#000" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FavHeart id={props.image.id} {...props} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src={curiosity}
                alt={props.image.rover.name}
                sx={{ width: 30, height: 30 }}
              />
              <div className="avatar-name">{props.image.rover.name}</div>
            </div>

            <CloseIcon
              fontSize="large"
              onClick={() => setOpen(false)}
              style={{ display: "flex", justifySelf: "flex-end" }}
            />
          </div>
          <img
            src={props.image.img_src}
            alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
            style={{
              objectFit: "contain",
              maxWidth: "80vw",
              maxHeight: "80vh",
              marginBottom: "0.5rem",
            }}
          />
        </DialogContent>
      </Dialog>

      <Card elevation={3} className="image-item" key={props.image.id}>
        <div>
          <img
            onClick={() => setOpen(true)}
            src={props.image.img_src}
            className="image-size"
            alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
          />
        </div>

        <div className="overlay-container">
          <div className="overlay-icon">
            <FavHeart id={props.image.id} {...props} />
          </div>
        </div>
        <CardContent>
          <Grid container spacing={2} className="info">
            <Grid item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar src={curiosity} alt={props.image.rover.name} />
                <div className="avatar-name">{props.image.rover.name}</div>
              </div>
            </Grid>
            <Grid item className="photo-date">
              Earth Date: {props.image.earth_date} <br />
              Sol: {props.image.sol} <br />
              Camera: {props.image.camera.full_name}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageItem;
