import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import { Paginate } from "../components/paginate/Paginate";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="paginate" element={<Paginate />} />
            </Route>
        </Routes>
    );
};
