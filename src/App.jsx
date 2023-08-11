import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="product" element={<Product></Product>}></Route>
                <Route path="pricing" element={<Pricing></Pricing>}></Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
