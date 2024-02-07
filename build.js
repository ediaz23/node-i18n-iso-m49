
import countries from 'i18n-iso-countries'
import fs from 'fs'
import { exec } from 'child_process'


async function main() {
    const langsDir = 'langs'
    exec(`rm -rf ${langsDir}`)
    fs.mkdirSync(langsDir)

    for (const lang of countries.langs().sort()) {
        if (fs.existsSync(`node_modules/ilib/locale/${lang}`)) {
            const filename = `node_modules/ilib/locale/${lang}/ctryreverse.json`
            if (fs.existsSync(filename)) {
                const content = JSON.parse(fs.readFileSync(filename, 'utf8'))
                const newJson = {}
                for (const key of Object.keys(content)) {
                    if (/^[0-9]*$/.test(key)) {
                        newJson[key] = content[key]
                    }
                }
                fs.writeFileSync(`${langsDir}/${lang}.json`, JSON.stringify(newJson))
            } else {
                console.log('No exists countries', lang)
            }
        } else {
            console.log('No exists', lang)
        }
    }
}

main()
