import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { Checkout } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaulLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/success" element={<Success />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}