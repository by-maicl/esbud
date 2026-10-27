import './SolutionKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';

import kstarSolution from '../../../../data/kstarSolution';

import { Check } from 'lucide-react';

function SolutionKstar() {
    return (
        <section className='solutionKstar'>
            <div className='solutionKstar__header'>
                <SectionTitle color='#fff' variant='medium'>Для кого підходить KSTAR</SectionTitle>
                <SectionAside>Рішення KSTAR для різних сфер</SectionAside>
            </div>

            <div className='solutionKstar__cards'>
                {kstarSolution.map((el, index) => (
                    <Reveal className='solutionKstar__card' key={el.id} delay={index * 150}>
                        <p className='solutionKstar__card-id'>{'0' + el.id}</p>
                        <h3 className='solutionKstar__card-title'>{el.title}</h3>
                        <p className='solutionKstar__card-description'>{el.description}</p>
                        <Check className='solutionKstar__card-icon' />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default SolutionKstar;