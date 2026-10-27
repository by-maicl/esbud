import './IconBlock.scss';

import { Check } from 'lucide-react';

function IconBlock({
    variant = 'primary',
    icon: Icon = Check,
    size = 48,
    className = '',
}) {
    const iconClasses = [
        'icon',
        `icon--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={iconClasses}
            style={{ 
                width: size + 'px', 
                height: size + 'px',
                minWidth: size + 'px',
                minHeight: size + 'px',
            }}
        >
            <Icon size={size / 2}></Icon>
        </div>
    );
}

export default IconBlock;