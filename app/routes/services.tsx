import { Outlet } from '@remix-run/react';

import Footer from '~/components/Footer';
import ServicesNavbar from '~/components/ServicesNavBar';


export default function ServicesLayout() {

    return (
        <>
            <ServicesNavbar />
            <Outlet />
            <Footer />
        </>
    );
}
