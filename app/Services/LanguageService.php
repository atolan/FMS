<?php


namespace App\Services;


use App\Language;
use App\LanguageTranslation;
use DB;

class LanguageService
{
    /**
     * @param $license
     * @param $locale
     */
    function create_default_language_translations($license, $locale)
    {
        $translations = [
            'extended' => collect([
                config("language-translations.extended"),
                config("language-translations.regular"),
                config("custom-language-translations")
            ])->collapse(),
            'regular'  => collect([
                config("language-translations.regular"),
                config("custom-language-translations")
            ])->collapse(),
        ];

        $translations = $translations[strtolower($license)]
            ->map(function ($value, $key) use ($locale) {
                return [
                    'lang'  => $locale,
                    'value' => $value,
                    'key'   => $key,
                ];
            })->toArray();

        $chunks = array_chunk($translations, 100);

        foreach ($chunks as $chunk) {
            DB::table('language_translations')
                ->insert($chunk);
        }
    }

    /**
     * Find newly added translations in default language
     * translations file and insert it into database
     */
    function upgrade_language_translations()
    {
        // Get all app locales
        $locales = Language::all()
            ->pluck('locale');

        // Get default translations
        $translations = LanguageTranslation::whereLang('en')
            ->get();

        $default_translations = [
            'extended' => collect([
                config("language-translations.extended"),
                config("language-translations.regular"),
                config("custom-language-translations")
            ])->collapse(),
            'regular'  => collect([
                config("language-translations.regular"),
                config("custom-language-translations")
            ])->collapse(),
        ];

        $license = strtolower(get_setting('license'));

        // Find new translations in default translations
        $newbies = $default_translations[$license]
            ->diffKeys(map_language_translations($translations));

        // Store new translations for every language
        $locales->each(function ($locale) use ($newbies) {

            $translations = $newbies
                ->map(function ($value, $key) use ($locale) {
                    return [
                        'lang'  => $locale,
                        'value' => $value,
                        'key'   => $key,
                    ];
                })->toArray();

            // Store translations into database
            $chunks = array_chunk($translations, 100);

            foreach ($chunks as $chunk) {
                DB::table('language_translations')
                    ->insert($chunk);
            }

            // Flush cache
            cache()->forget("language-translations-$locale");
        });
    }
}