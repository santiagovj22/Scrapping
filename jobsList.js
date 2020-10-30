const scrapeIt = require("scrape-it");
// import scrapeIt from 'scrape-it'
const URL = 'https://www.arrivia.com/careers/jobs-results/?category=All&location=All'

async function jobsList() {
    const scrapeResult = await scrapeIt(URL, {
        jobs: {
            listItem: 'div.job-search-result',
            data:{
               title: {selector:'h3'},
               location: {selector:'p'},
               url: {selector:'a', attr:'href'}
            }
        }
    });
    const list = scrapeResult.data
    // const result = showData(list)
    return list
}


// async function showData(){
//     const list = await jobsList()
//     console.log(list)
//     var secondDiv = document.getElementById('list')
//     secondDiv.innerHTML = "helloooooo"
//     // for(let i=0; i< list.lenght;i++){
//     //     secondDiv.innerHTML = "hello"
//     // }
// }
// showData()
module.exports = { jobsList }
