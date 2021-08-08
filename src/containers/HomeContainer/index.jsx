import './index.css'; 
import { OutstandingsBrands } from '../../components/OutstandingsBrands';
import { AboutsUs } from '../../components/AboutUs';
import { Banner } from '../../components/Banner';
import { OutstandingsProducts } from '../../components/OutstandingsProducts';

export const HomeContainer = () => {
    return (
        <>
            <Banner />
            <AboutsUs />
            <OutstandingsBrands />
            <OutstandingsProducts />
        </>
    )
}