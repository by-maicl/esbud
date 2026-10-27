import './ArrowButton.scss';

import { ArrowRight } from 'lucide-react';

function ArrowButton({
    onClick,
    disabled = false,
    className = '',
}) {
    const arrowButtonClasses = [
        'arrowButton',
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