import Banner from '../components/Banner.js';
import Highlights from '../components/Highlights.js';
import {Fragment} from 'react';

export default function Home (){
	return(
		<Fragment>
			<Banner/>
			<Highlights/>			
		</Fragment>
		)
}