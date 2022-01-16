import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const ImageItem = (props, { image }) => {
  console.log(props);
  return (
    <div>
      <Card elevation={3} className="image-item" outlined={true}>
        {/* <div className="avatar-container">
          <div className="avatar">
            <Avatar />
            <span> Like </span>
          </div>
        </div> */}

        <CardMedia
          component="img"
          image={props.image.img_src}
          className="image-size"
          alt={`mars photo taken by the ${props.image.rover.name} on ${props.image.earth_date}`}
        />
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
