import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ReactGA from 'react-ga';
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();
ReactGA.initialize('G-3GZDQX18SK');

const Root = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
