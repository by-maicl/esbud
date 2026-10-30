import './SolutionKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';

import kstarSolution from '../../../../data/kstarSolution';

import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function SolutionKstar() {
    const { t } = useTranslation();
    return (
        <section className='solutionKstar'>
            <div className='solutionKstar__header'>
                <SectionTitle color='#fff' variant='medium'>{t('kstar.solutionsTitle')}</SectionTitle>
                <SectionAside>{t('kstar.solutionsAside')}</SectionAside>
            </div>

            <div className='solutionKstar__cards'>
                {kstarSolution.map((el, index) => (
                    <Reveal className='solutionKstar__card' key={el.id} delay={index * 150}>
                        <p className='solutionKstar__card-id'>{'0' + el.id}</p>
                        <h3 className='solutionKstar__card-title'>{t(`kstarSolution.${el.id}.title`)}</h3>
                        <p className='solutionKstar__card-description'>{t(`kstarSolution.${el.id}.description`)}</p>
                        <Check className='solutionKstar__card-icon' />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default SolutionKstar;