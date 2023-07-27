import Icon from './components/Icon';
import './Footer.css';

export default function Footer() {

	const year = new Date().getFullYear();

	return (
        <footer>
            <div className='logo'>
                <Icon icon='logo' />
                <p>SUN CO.</p>
			</div>
			<div className='rights'>
				&copy; {year} dot.cards text task. All rights reserved.
			</div>
			<div className='socials'>
				<Icon icon='instagram' />
				<Icon icon='twitter' />
				<Icon icon='youtube' />
			</div>
        </footer>
    );
}