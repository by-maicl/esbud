import './ArrowButton.scss';

import { ArrowRight } from 'lucide-react';

function ArrowButton({
    onClick,
    variant = 'primary',
    disabled = false,
    className = '',
}) {
    const arrowButtonClasses = [
        'arrowButton',
        `arrowButton--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={arrowButtonClasses}
            type='button'
            onClick={onClick}
            disabled={disabled}
        >
            <div><ArrowRight /></div>
        </button>
    );
}

export default ArrowButton;