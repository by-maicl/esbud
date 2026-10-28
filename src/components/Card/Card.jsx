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
    const isModular = variant == 'secondary';

    const isActive = isHovered || isModular;

    const cardClasses = [
        'card',
        `card--${variant}`,
        isActive ? 'card--active' : '',
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
                variant={
                    isGrowatt
                        ? isActive
                            ? 'growatt-secondary'
                            : 'growatt-primary'
                        : isActive
                            ? 'secondary'
                            : 'primary'
                }
            />
            <div>
                <SectionTitle color={!isActive ? '#000' : '#fff'} size={21}>{title}</SectionTitle>
                <SectionAside varian={!isActive ? '' : 'card'} size={14} className='card__text'>{children}</SectionAside>
            </div>
        </div>
    );
}

export default Card;