import { useState } from 'react';

import './CardHorizontal.scss';

import IconBlock from '../IconBlock/IconBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAside from '../SectionAside/SectionAside';

function CardHorizontal({
    title,
    children,
    icon: Icon,
    variant = 'primary',
    className = '',
}) {
    const [isHovered, setIsHovered] = useState(false);

    const cardClasses = [
        'cardHorizontal',
        `cardHorizontal--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cardClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IconBlock
                icon={Icon}
                variant={!isHovered ? 'primary' : 'secondary'}
            />
            <div>
                <SectionTitle color={!isHovered ? '#000' : '#fff'} size={21}>{title}</SectionTitle>
                <SectionAside varian={!isHovered ? '' : 'card'} size={14} className='cardHorizontal__text'>{children}</SectionAside>
            </div>
        </div>
    );
}

export default CardHorizontal;