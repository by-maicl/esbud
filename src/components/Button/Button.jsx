import './Button.scss';

import { ArrowRight } from 'lucide-react';

function Button({
    children,
    variant = 'primary',
    type = 'button',
    onClick,
    disabled = false,
    className = '',
    style = {},
}) {
    const buttonClasses = [
        'button',
        `button--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <button
            className={buttonClasses}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
            <div className='button__icon'>
                <ArrowRight size={20} />
            </div>
        </button>
    );
}

export default Button;