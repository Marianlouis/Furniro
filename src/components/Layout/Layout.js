import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
