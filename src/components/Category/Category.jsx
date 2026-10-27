import './Category.scss';

function Category({
    children,
    variant = 'primary',
    className = '',
}) {
    const categoryClasses = [
        'category',
        `category--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div variant={variant} className={categoryClasses}>{children}</div>
    );
}

export default Category;