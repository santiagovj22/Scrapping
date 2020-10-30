var title = document.getElementById('title')
var location = document.getElementById('location')
var url = document.getElementById('url')
var tabla = document.getElementById('tabla')

async function getData(){
    const lista = await fetch('http://localhost:3001/api/jobs')
    .then(res => res.json())

    return lista.jobs
}

async function insertData(){
    let array2 = await getData()

    for(let k=0; k<= array2.length;k++){
        var principalContainer2 = document.createElement('tr')
        var titlep = document.createElement("td");
        var locationp = document.createElement("td");
        var urlp = document.createElement("a");
        titlep.innerHTML = array2[k].title;
        locationp.innerHTML = array2[k].location;
        var href = urlp.setAttribute('href','https://www.arrivia.com/'+array2[k].url)
        urlp.innerHTML = href
        principalContainer2.appendChild(titlep)
        principalContainer2.appendChild(locationp)
        principalContainer2.appendChild(urlp)
        tabla.appendChild(principalContainer2)
    }
}
insertData()