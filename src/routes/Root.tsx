import { Outlet } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';
import './Root.css';

export default function Root() {

    return (
        <div className='root'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
