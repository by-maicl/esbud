import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const currentLang = (i18n.resolvedLanguage || i18n.language || 'uk')
        .split('-')[0];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-switcher" aria-label="Language selection">
            <button
                type="button"
                className={`language-switcher__btn ${currentLang === 'uk' ? 'active' : ''}`}
                onClick={() => changeLanguage('uk')}
                aria-pressed={currentLang === 'uk'}
            >
                UA
            </button>

            <button
                type="button"
                className={`language-switcher__btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;