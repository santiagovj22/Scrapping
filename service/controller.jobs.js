var containerList = document.getElementById('containerList')

const serviceUrl = 'http://localhost:3001/api/jobs'

async function getData(){
    const data = await fetch(serviceUrl)
    .then(res => res.json())

    return data.jobs
}

async function insertData(){
    let listJobs = await getData()

    for(let k=0; k<= listJobs.length; k++){
        var fieldsData = document.createElement('tr')
        var count = document.createElement("td")
        var title = document.createElement("td");
        var location = document.createElement("td");
        var url = document.createElement("a");
        count.innerHTML = k + 1
        title.innerHTML = listJobs[k].title;
        location.innerHTML = listJobs[k].location;
        url.setAttribute('href','https://www.arrivia.com/'+listJobs[k].url)
        url.innerHTML = 'https://www.arrivia.com/'+listJobs[k].url
        fieldsData.appendChild(count)
        fieldsData.appendChild(title)
        fieldsData.appendChild(location)
        fieldsData.appendChild(url)
        containerList.appendChild(fieldsData)
    }
}

insertData()