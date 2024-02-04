import React from "react";
import App from "./App";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const rt = createRoot(document.getElementById("root"));
rt.render(
<BrowserRouter>
<App />
</BrowserRouter>
)