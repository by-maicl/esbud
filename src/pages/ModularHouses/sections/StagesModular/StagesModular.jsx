import './StagesModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';

import modularStages from '../../../../data/modularStages'

function StagesModular() {
    return (
        <section className='stagesModular'>
            <div className='stagesModular__header'>
                <SectionTitle variant='medium' className='stagesModular__title'>Етапи роботи</SectionTitle>
                <SectionAside className='stagesModular__aside'>Блок-модуль — це основна структурна одиниця
                    модульної споруди, що являє собою готовий до встановлення будівельний елемент. </SectionAside>
            </div>

            <div className='stagesModular__stages'>
                {modularStages.map(stage => (
                    <div
                        key={stage.id}
                        className='stagesModular__stage'>
                        <p className='stagesModular__stage-number'>{stage.id}</p>

                        <div>
                            <h3 className='stagesModular__stage-title'>{stage.title}</h3>
                            <p className='stagesModular__stage-text'>{stage.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StagesModular;