import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ImageItem = (props, { image }) => {
  console.log(props);
  return (
    <div>
      <Card elevation={3} className="image-item" outlined={true}>
        <div style={{ background: "#000" }}>
          <img
            src={props.image.img_src}
            className="image-size"
            alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
          />
        </div>

        {/* <CardMedia
          component="img"
          image={props.image.img_src}
          className="image-size"
          alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
        /> */}
        <div className="overlay-container">
          <div className="overlay-icon">
            <FavoriteBorderIcon fontSize="large" style={{ color: "red" }} />
          </div>
        </div>
        <CardContent>
          <Grid container spacing={2} className="info">
            <Grid item>
              {props.image.camera.full_name} on {props.image.rover.name}
            </Grid>
            <Grid item className="photo-date">
              Earth Date: {props.image.earth_date} <br />
              Sol:{props.image.sol}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageItem;
