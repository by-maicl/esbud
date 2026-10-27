import './ContactSection.scss';

import SectionTitle from '../SectionTitle/SectionTitle';
import SectionAside from '../SectionAside/SectionAside';
import Button from '../Button/Button';

function ContactSection({
    variant = 'kstar',
    className,
}) {
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
                <SectionTitle className='contactSection__title' variant='medium'>Сконфігуруймо рішення під вашу задачу</SectionTitle>
                <SectionAside>
                    Залиште короткий запит — команда ТОВ «Енергосоларбуд» допоможе обрати категорію, 
                    сформувати вихідні дані та спланувати наступний етап.
                </SectionAside>
            </div>
            <Button className='contactSection__btn'>Зв'язатися</Button>
        </section>
    );
}

export default ContactSection;