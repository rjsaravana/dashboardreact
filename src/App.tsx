import { ConfigProvider } from "antd";
import "./App.css";
import { AppRoutes } from "./app/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
