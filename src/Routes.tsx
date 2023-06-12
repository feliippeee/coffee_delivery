import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { Checkout } from "./pages/Checkout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}