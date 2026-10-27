import './CardImg.scss';

function CardImg({
    name,
    title,
    children,
    img,
    variant = 'primary',
    className,
}) {

    const cardClasses = [
        'cardImg',
        `cardImg--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cardClasses}
            style={variant == 'primary' ? {'--card-image' : `url(${img})`} : undefined}
        >
            <div className='cardImg__name'>{name}</div>
            <div className='cardImg__info'>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div >
    );
}

export default CardImg;