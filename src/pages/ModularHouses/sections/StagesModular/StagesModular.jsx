import './StagesModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';

import modularStages from '../../../../data/modularStages'
import { useTranslation } from 'react-i18next';

function StagesModular() {
    const { t } = useTranslation();
    return (
        <section className='stagesModular'>
            <div className='stagesModular__header'>
                <SectionTitle variant='medium' className='stagesModular__title'>{t('modular.stagesTitle')}</SectionTitle>
                <SectionAside className='stagesModular__aside'>{t('modular.stagesAside')}</SectionAside>
            </div>

            <div className='stagesModular__stages'>
                {modularStages.map(stage => (
                    <div
                        key={stage.id}
                        className='stagesModular__stage'>
                        <p className='stagesModular__stage-number'>{stage.id}</p>

                        <div>
                            <h3 className='stagesModular__stage-title'>{t(`modularStages.${stage.id}.title`)}</h3>
                            <p className='stagesModular__stage-text'>{t(`modularStages.${stage.id}.text`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StagesModular;