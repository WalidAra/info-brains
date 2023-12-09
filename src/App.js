import "./styles/tail.css";
import "./styles/index.css";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col bg-primary ">
      <ChakraProvider>
        <Home />
        {/* <Footer /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
