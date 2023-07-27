import { ReactComponent as logo } from '../assets/logo.svg';
import { ReactComponent as cart } from '../assets/cart.svg';
import { ReactComponent as arrowRight } from '../assets/arrow-right.svg';
import { ReactComponent as chevronRight } from '../assets/cart.svg';
import { ReactComponent as chevronLeft } from '../assets/chevron-left.svg';
import { ReactComponent as plus } from '../assets/plus.svg';
import { ReactComponent as minus } from '../assets/minus.svg';
import { ReactComponent as twitter } from '../assets/Twitter.svg';
import { ReactComponent as youtube } from '../assets/Youtube.svg';
import { ReactComponent as instagram } from '../assets/Instagram.svg';

import { FC, ReactElement } from 'react';

const IconComponents = {
	logo: logo,
    cart: cart,
    arrowRight: arrowRight,
    chevronRight: chevronRight,
    chevronLeft: chevronLeft,
    plus: plus,
    minus: minus,
    twitter: twitter,
    youtube: youtube,
    instagram: instagram,
};

type IconName = keyof typeof IconComponents;

interface IconButtonProps {
	icon: IconName;
}


const Icon: FC<IconButtonProps> = ({ icon }): ReactElement => {
    const Icon = IconComponents[icon];

    return (
            <Icon className='icon' />
    );
};

export default Icon;