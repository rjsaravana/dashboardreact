import { ConfigProvider } from "antd";
import "./App.css";
import { AppLayout } from "./app/dashboard/dashboard";

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;
