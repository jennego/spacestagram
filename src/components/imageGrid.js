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
            <Grid item>
              <ImageItem image={photo} />
            </Grid>
          ))}

          <Grid item>
            <Button
              variant="outlined"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Next Page
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageGrid;
