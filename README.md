# i18n-iso-m49

i18n for M49 Region codes. See project [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries)

## Installing

Install it using npm: `npm install i18n-iso-m49` and  `npm install i18n-iso-countries`

```javascript
import countries from 'i18n-iso-countries'
import regions from 'i18n-iso-m49'
```

You have to register the languages you want to use, don't registry with i18n-iso-countries function.

```javascript
// Support french & english languages.
regions.registerLocale(countries, 
    (await import(`i18n-iso-countries/langs/en.json`)).default,
    (await import(`i18n-iso-m49/langs/en.json`)).default)
```

## Code to Region

### Get the name of a region or a country

```javascript
import countries from 'i18n-iso-countries'
import regions from 'i18n-iso-m49'

async function main() {
    regions.registerLocale(countries, 
        (await import(`i18n-iso-countries/langs/en.json`)).default,
        (await import(`i18n-iso-m49/langs/en.json`)).default)
    console.log(countries.getName("419", "en")); // Latin America
}
main()
```