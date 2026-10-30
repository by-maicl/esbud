import './ContactSection.scss';

import { Link } from 'react-router';

import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAside from '../SectionAside/SectionAside';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

function ContactSection({
    variant = 'primary',
    className,
}) {
    const { t } = useTranslation();
    const contactSectionClasses = [
        'contactSection',
        `contactSection--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <section className={contactSectionClasses}>
            <div className='contactSection__wrapp'>
                <SectionTitle className='contactSection__title' variant='medium'>{t('contactSection.title')}</SectionTitle>
                <SectionAside>
                    {t('contactSection.text')}
                </SectionAside>
            </div>
            <Link to="/#contacts">
                <Button variant={variant} className='contactSection__btn'>{t('contactSection.contact')}</Button>
            </Link>
        </section>
    );
}

export default ContactSection;