import { Outlet } from 'react-router-dom';
import { Nav } from '../src/components/Nav';
import { Footer } from '../src/components/Footer';

export const Layout = () => {
    return (
        <div>
            <Nav />
            <h1>Header</h1>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}