import './SectionTitle.scss';

function SectionTitle({
    children,
    variant = 'semibold',
    color,
    size,
    className = '',
}) {
    const titleClasses = [
        'title',
        `title--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <h2 className={titleClasses} style={{ color: color, fontSize: size + 'px' }}>{children}</h2>
    );
}

export default SectionTitle;