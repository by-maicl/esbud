
import { useEffect, useRef, useState } from 'react';
import './Reveal.scss';

function Reveal({
    children,
    className = '',
    delay = 0,
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={[
                'reveal',
                isVisible && 'reveal--visible',
                className,
            ].filter(Boolean).join(' ')}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default Reveal;
