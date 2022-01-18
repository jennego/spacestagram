import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import curiosity from "../avatars/rover-c.jpg";

const ImageItem = (props) => {
  const [hover, setHover] = useState(false);

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

  return (
    <Card elevation={3} className="image-item" key={props.image.id}>
      <div>
        <img
          src={props.image.img_src}
          className="image-size"
          alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
        />
      </div>

      <div className="overlay-container">
        <div className="overlay-icon">
          {isFaved(props.image.id) ? (
            <FavoriteIcon
              className="fav-icon"
              fontSize="large"
              style={{ color: "red" }}
              onClick={() => props.removeFav(props.image)}
            />
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
          )}
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
  );
};

export default ImageItem;
