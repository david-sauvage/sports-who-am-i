import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * SEO metadata per language.
 * Updates <html lang>, <title>, <meta name="description">,
 * and Open Graph / Twitter meta tags whenever the i18n language changes.
 */
const SEO_DATA: Record<string, { title: string; description: string; ogLocale: string }> = {
    fr: {
        title: 'Qui Suis-Je ? — Quiz Sportif Football & Basketball',
        description:
            'Testez vos connaissances sportives ! Devinez des joueurs de football et basketball à partir d\'indices sur leur carrière. Jouez seul ou défiez vos amis avec le challenge du jour.',
        ogLocale: 'fr_FR',
    },
    en: {
        title: 'Who Am I? — Football & Basketball Sports Quiz',
        description:
            'Test your sports knowledge! Guess football and basketball players from career clues. Play solo or challenge your friends with the daily challenge.',
        ogLocale: 'en_GB',
    },
    es: {
        title: '¿Quién Soy? — Quiz Deportivo de Fútbol y Baloncesto',
        description:
            '¡Pon a prueba tus conocimientos deportivos! Adivina jugadores de fútbol y baloncesto a partir de pistas sobre su carrera. Juega solo o desafía a tus amigos.',
        ogLocale: 'es_ES',
    },
};

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
    let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

export function useSeo() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lang = i18n.language;
        const seo = SEO_DATA[lang] || SEO_DATA['fr'];

        // Update <html lang>
        document.documentElement.lang = lang;

        // Update <title>
        document.title = seo.title;

        // Update meta description
        setMetaTag('description', seo.description);

        // Update Open Graph tags
        setMetaTag('og:title', seo.title, 'property');
        setMetaTag('og:description', seo.description, 'property');
        setMetaTag('og:locale', seo.ogLocale, 'property');

        // Update Twitter Card tags
        setMetaTag('twitter:title', seo.title);
        setMetaTag('twitter:description', seo.description);
    }, [i18n.language]);
}
