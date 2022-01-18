import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ImageGrid from "./components/imageGrid";
import { NasaData } from "./components/query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Favorite from "@mui/icons-material/Favorite";
import { padding } from "@mui/system";

const api_key = process.env.REACT_APP_NASA_KEY;

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [favs, setFavs] = useState([]);
  const [showFavs, setShowFavs] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    NasaData.getCuriosityMastPhotos(page)
      .then((data) => {
        setData({ data });
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [page]);

  useEffect(() => {
    if (localStorage.getItem("favs") !== null) {
      setFavs(JSON.parse(localStorage.getItem("favs")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const clearStorage = () => {
    setFavs([]);
    localStorage.clear();
  };

  const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const addFav = (fav) => {
    setFavs((favs) => [...favs, fav]);
    // localStorage.setItem("favs", JSON.stringify(favs));
  };

  const removeFav = (fav) => {
    setFavs(favs.filter((item) => item.id !== fav.id));
    // localStorage.setItem("favs", JSON.stringify(favs));
  };

  console.log(favs.length);

  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <h1 className="title"> Spacestagram: Mars</h1>

        <div
          style={{
            padding: "1rem",
          }}
        >
          {showFavs ? (
            <div>
              <Button variant="outlined" onClick={() => setShowFavs(false)}>
                Show All
              </Button>
            </div>
          ) : (
            <Button
              startIcon={<Favorite />}
              variant="outlined"
              onClick={() => setShowFavs(true)}
            >
              Show Favs
            </Button>
          )}
        </div>

        {hasError ? (
          <p> Sorry! There seems to be an error getting photos.</p>
        ) : (
          ""
        )}

        {isLoading ? (
          <div>
            <CachedIcon className="rotate" style={{ fontSize: "70px" }} />
            <p> Loading... </p>
          </div>
        ) : data.data !== undefined && isLoading === false ? (
          showFavs ? (
            favs.length > 0 ? (
              <div>
                <ImageGrid
                  images={favs}
                  addFav={addFav}
                  removeFav={removeFav}
                  favs={favs}
                />
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={clearStorage}
                >
                  Clear all favs
                </Button>
              </div>
            ) : (
              <p>
                {" "}
                You have no Favs. Go click the <Favorite fontSize="small" /> to
                add some.
              </p>
            )
          ) : (
            <ImageGrid
              images={data.data.photos}
              addFav={addFav}
              removeFav={removeFav}
              favs={favs}
            />
          )
        ) : (
          <p>Oops we couldn't find the photos! ☹️</p>
        )}
      </div>

      {showFavs === false ? (
        <div className="navigation">
          {page > 1 ? (
            <Button variant="outlined" onClick={() => setPage(page - 1)}>
              Previous Page
            </Button>
          ) : (
            <Button variant="outlined" disabled>
              {" "}
              Previous Page{" "}
            </Button>
          )}
          <div>Page {page}</div>
          <Button variant="outlined" onClick={() => setPage(page + 1)}>
            Next Page
          </Button>
        </div>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
};

export default App;
