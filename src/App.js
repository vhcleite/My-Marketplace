import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import { Route, Routes } from "react-router-dom";

const Shops = () => {
  return (
    <div>
      <h1>I am Shops</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shops" element={<Shops />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
