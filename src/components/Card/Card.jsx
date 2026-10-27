import { useState } from 'react';

import './Card.scss';

import IconBlock from '../IconBlock/IconBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAside from '../SectionAside/SectionAside';

function Card({
    title,
    children,
    icon: Icon,
    variant = 'primary',
    className = '',
}) {
    const [isHovered, setIsHovered] = useState(false);

    const isGrowatt = variant == 'growatt';

    const cardClasses = [
        'card',
        `card--${variant}`,
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
                variant={isGrowatt ? 
                    !isHovered ? 'growatt-primary' : 'growatt-secondary'
                    :
                    !isHovered ? 'primary' : 'secondary'}
            />
            <div>
                <SectionTitle color={!isHovered ? '#000' : '#fff'} size={21}>{title}</SectionTitle>
                <SectionAside varian={!isHovered ? '' : 'card'} size={14} className='card__text'>{children}</SectionAside>
            </div>
        </div>
    );
}

export default Card;