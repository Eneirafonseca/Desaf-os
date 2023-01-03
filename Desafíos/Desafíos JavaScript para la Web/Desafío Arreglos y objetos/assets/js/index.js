const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://static.abc.es/media/MM/2021/08/24/2_the_weeknd_mansion_bel_air-ke6--1597x900@abc.jpg",
    rooms: 5,
    m: 500
  }
];

var sectionPropiedades = document.getElementById("propiedades")
var inputRooms = document.getElementById("rooms")
var inputMFrom = document.getElementById("m-from")
var inputMTo = document.getElementById("m-to")
var buttonSearch = document.getElementById("search")
var textTotal = document.getElementById("total")

var total

function setTotal(array) {
  textTotal.innerText = array.length

}


function alterPropiedades(array) {
  propiedadesHTML = array.map(val => `
  <div class="propiedad">
  <div class="img" style="background-image: url(${val.src})"></div>
  <section>
      <h5>${val.name}</h5>
      <div class="d-flex justify-content-between">
          <p>Cuartos: ${val.rooms}</p>
          <p>Metros: ${val.m}</p>
      </div>
      <p class="my-3">${val.description}</p>
      <button class="btn btn-info ">Ver más</button>
  </section>
</div>
  `)
  let articles = propiedadesHTML.join("")
  propiedades.innerHTML = articles

}

function init() {
  alterPropiedades(propiedadesJSON)
  setTotal(propiedadesJSON)
}

function filterByRooms(array) {
  numRooms = inputRooms.value
  if(!numRooms){
    alert("Debes rellenar el número de cuartos")
    return null
  }
  arrayFilter = array.filter(val => val.rooms === +numRooms)
  return arrayFilter

}

function filterByMeters(array) {
  metersFrom = inputMFrom.value
  metersTo = inputMTo.value
  if (!metersTo || !metersFrom) {
    alert("Debes rellenar los campos de metros")
    return null
  }
  arrayFilter = array.filter(val => val.m >= +metersFrom && val.m <= metersTo)
  return arrayFilter

}

buttonSearch.addEventListener("click", function () {
  finalArray = filterByRooms(propiedadesJSON) != null ? filterByRooms(propiedadesJSON) : propiedadesJSON
  finalArray = filterByMeters(propiedadesJSON) != null ? filterByMeters(propiedadesJSON) : finalArray
  alterPropiedades(finalArray)
  setTotal(finalArray)

})

init()