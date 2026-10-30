import './CardHouse.scss';

import IconBlock from '../IconBlock/IconBlock';
import SectionTitle from '../SectionTitle/SectionTitle';

import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function CardHouse({
    name,
    data,
    img,
    variant = 'primary',
    className = '',
}) {
    const { t } = useTranslation();
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
                <img src={img} alt={name} />
                <IconBlock icon={ArrowUpRight} className='cardHouse__img-icon' />
            </div>
            <p className='cardHouse__title'>{t('modular.houseLabel')}</p>
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