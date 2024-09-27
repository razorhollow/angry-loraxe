import { Outlet } from "@remix-run/react";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function LandingLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}