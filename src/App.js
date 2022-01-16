import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ImageGrid from "./components/imageGrid";
import { NasaData } from "./components/query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const api_key = process.env.REACT_APP_NASA_KEY;

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    NasaData.getCuriosityMastPhotos()
      .then((data) => {
        setData({ data });
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <h1 className="title"> Spacestagram: Mars</h1>

        {data.data !== undefined && isLoading === false ? (
          <ImageGrid images={data.data.photos} />
        ) : (
          "no data"
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
