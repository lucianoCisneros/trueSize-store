import { OutstandingsBrands } from '../../components/OutstandingsBrands';
import { AboutsUs } from '../../components/AboutUs';
import { Banner } from '../../components/Banner';
import { OutstandingsProducts } from '../../components/OutstandingsProducts';
import './index.css'; 

export const HomeContainer = () => (
	<>
		<Banner />
		<AboutsUs />
		<OutstandingsBrands />
		<OutstandingsProducts />
	</>
);
