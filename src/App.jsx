import Navbar from "./components/layout/Navbar";
import "remixicon/fonts/remixicon.css";
import AppRoutes from "./routes/AppRoutes";
import "./style/main.scss"
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  );
};

export default App;
