const scrapeIt = require("scrape-it");

const URL = 'https://www.arrivia.com/careers/jobs-results/?category=All&location=All'

async function jobsList() {
    try {
        const dataExtraction = await scrapeIt(URL, {
            jobs: {
                listItem: 'div.job-search-result',
                data:{
                   title: {selector:'h3'},
                   location: {selector:'p'},
                   url: {selector:'a', attr:'href'}
                }
            }
        });
        return dataExtraction.data
    } catch (error) {
        console.log('Extraction failed :c', error)
    }
}

module.exports = { jobsList }
