import './CardHouse.scss';

import IconBlock from '../IconBlock/IconBlock';
import SectionTitle from '../SectionTitle/SectionTitle';

import { ArrowUpRight } from 'lucide-react';

function CardHouse({
    name,
    data,
    img,
    variant = 'primary',
    className = '',
}) {
    const cardHouseClasses = [
        'cardHouse',
        `cardHouse--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={cardHouseClasses}>
            <div className='cardHouse__img'>
                <img src={img} />
                <IconBlock icon={ArrowUpRight} className='cardHouse__img-icon' />
            </div>
            <p className='cardHouse__title'>Модульний будинок</p>
            <SectionTitle variant='medium' className='cardHouse__name'>{name}</SectionTitle>

            <div className='cardHouse__params'>
                {data.map((param, index) => (
                    <div
                        key={index}
                        className='cardHouse__param'
                    >{param}</div>
                ))}
            </div>
        </div>
    );
}

export default CardHouse;