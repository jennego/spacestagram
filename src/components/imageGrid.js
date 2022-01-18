import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ImageItem from "./imageItem";
import Button from "@mui/material/Button";

const ImageGrid = (props) => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {props.images.map((photo) => (
            <Grid item key={photo.id}>
              <ImageItem
                image={photo}
                addFav={props.addFav}
                removeFav={props.removeFav}
                {...props}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ImageGrid;
