
import countries from 'i18n-iso-countries'

async function main() {
    const lang = 'en'
    const countryData = (await import(`i18n-iso-countries/langs/${lang}.json`)).default
    const regionData = (await import(`./langs/${lang}.json`)).default
    registerLocale(countries, countryData, regionData)
    console.log(countries.toAlpha2(419))
    console.log(countries.getName(419, lang))
}

main()
