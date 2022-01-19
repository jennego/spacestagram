import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ImageItem from "./imageItem";

const ImageGrid = (props) => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "center" }}
        >
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
