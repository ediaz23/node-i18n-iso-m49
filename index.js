
/**
 * @param {import(i18n-iso-countries)} countryLib
 * @param {Object} countryData
 * @param {Object} regionData
 */
function registerLocale(countryLib, countryData, regionData) {
    const alpha2 = countryLib.getNumericCodes()
    for (const key of Object.keys(regionData)) {
        alpha2[key] = key
        countryData.countries[key] = regionData[key]
    }
    countryLib.registerLocale(countryData)
}

export default {
    registerLocale
}