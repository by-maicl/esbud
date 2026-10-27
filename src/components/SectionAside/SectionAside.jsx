import './SectionAside.scss';

function SectionAside({
    children,
    size = 16,
    varian = '',
    className = '',
}) {
    const asideClasses = [
        'asideText',
        `asideText--${varian}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <p style={{fontSize: size + 'px'}} className={asideClasses}>{children}</p>
    );
}

export default SectionAside;