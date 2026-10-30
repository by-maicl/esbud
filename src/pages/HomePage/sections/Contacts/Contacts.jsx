import './Contacts.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import IconBlock from '../../../../components/IconBlock/IconBlock';
import Button from '../../../../components/Button/Button';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Contacts() {
    const { t } = useTranslation();
    return (
        <section className='contacts' id='contacts'>
            <div>
                <SectionTitle size={50} variant='medium'>{t('home.contacts.title')}</SectionTitle>
                <p>{t('home.contacts.text')}</p>
            </div>
            <div className='contacts__info'>
                <ul>
                    <li>
                        <IconBlock size={30} icon={Phone} />
                        +38 063 598 2191
                    </li>
                    <li>
                        <IconBlock size={30} icon={Mail} />
                        tovesb.info@gmail.com
                    </li>
                    <li>
                        <IconBlock size={30} icon={MapPin} />
                        {t('home.contacts.address')}
                    </li>
                </ul>
                <a href="tel:+380635982191"><Button className='contacts__btn'>{t('contactSection.contact')}</Button></a>
            </div>
            <iframe
                className='contacts__map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.4903218173117!2d30.541974076915153!3d50.412797590073616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf420bf6814d%3A0x6d71372306c0de25!2z0YPQuy4g0JTRgNCw0LPQvtC80LjRgNC-0LLQsCwgNCwg0JrQuNC10LIsIDAxMTAz!5e1!3m2!1sru!2sua!4v1792175232719!5m2!1sru!2sua"
                allowFullScreen="" loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </section>
    );
}

export default Contacts;