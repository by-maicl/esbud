import './SectionSubtitle.scss';

function SectionSubtitle({
    children,
    className = '',
    style = {},
}) {
    const subtitleClasses = [
        'subtitle',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <h3 className={subtitleClasses} style={style}>{children}</h3>
    );
}

export default SectionSubtitle;