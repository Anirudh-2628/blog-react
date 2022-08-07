import React from "react";
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contribute from './pages/Contribute'
import Dimensions from './pages/Dimensions'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


export default function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="Dimensions" element={<Dimensions />} />
                <Route path="Contribute" element={<Contribute />} />
                {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
