import { useState } from 'react';

import './FaqModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';

import modularFaq from '../../../../data/modularFaq';

import { Plus, X } from 'lucide-react'; // Заменили Minus на X
import { useTranslation } from 'react-i18next';

function FaqModular() {
    const { t } = useTranslation();
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (id) => {
        setActiveQuestion((currentId) => (
            currentId === id ? null : id
        ));
    };

    return (
        <section className="faqModular">
            <div className="faqModular__header">
                <SectionTitle variant="medium">
                    {t('modular.faqTitle')}
                </SectionTitle>

                <SectionAside>
                    {t('modular.faqAside')}
                </SectionAside>
            </div>

            <div className="faqModular__wrapp">
                {modularFaq.map((question) => {
                    const isOpen = activeQuestion === question.id;

                    return (
                        <div
                            className={`faqModular__question ${isOpen ? 'active' : ''}`}
                            key={question.id}
                        >
                            <button
                                type="button"
                                className="faqModular__question-header"
                                onClick={() => toggleQuestion(question.id)}
                                aria-expanded={isOpen}
                            >
                                <h3 className="faqModular__question-title">
                                    {t(`modularFaq.${question.id}.question`)}
                                </h3>

                                {/* Теперь при открытии рендерится полноценный крестик X */}
                                {isOpen ? <X size={22} /> : <Plus size={22} />} 
                            </button>

                            <div
                                className="faqModular__answer-wrapper"
                                inert={!isOpen}
                            >
                                <p className="faqModular__question-answer">
                                    {t(`modularFaq.${question.id}.answer`)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FaqModular;