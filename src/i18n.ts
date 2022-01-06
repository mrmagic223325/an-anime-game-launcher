import { register, init } from 'svelte-i18n';

import Locales from './ts/core/Locales';

register('en-us', () => Locales.get('en-us'));
register('ru-ru', () => Locales.get('ru-ru'));
register('de-de', () => Locales.get('de-de'));
register('fr-fr', () => Locales.get('fr-fr'));
register('es-es', () => Locales.get('es-es'));
register('vi-vn', () => Locales.get('vi-vn'));

Locales.default().then((locale) => {
    init({
        fallbackLocale: 'en-us',
        initialLocale: locale,
    });
});
