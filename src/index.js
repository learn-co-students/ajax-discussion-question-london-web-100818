const fullname = document.getElementById("fullname");
const emailform = document.getElementById("email");
const streetform = document.getElementById("street");
const cityform = document.getElementById("city");
const stateform = document.getElementById("state");
const postcodeform = document.getElementById("postcode");
const date_of_birth_form = document.getElementById("date_of_birth");
const phone_form = document.getElementById("phone");
const cell_form = document.getElementById("cell");
const image = document.querySelector("img")

const btn = document.querySelector('.btn')
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json =>  json )
          return data

}


document.addEventListener("DOMContentLoaded", () => {
  //JSON.stringify(fetchData())
});

btn.addEventListener("click", () => {
  var result = fetchData().then( something => {
    const results = something.results[0]
    const name = results.name
    const email = results.email
    const dob = results.dob.date
    const location = results.location
    const phone = results.phone
    const cell = results.cell
    const thumb = results.picture.large
    console.log(results)
    fullname.innerText = name.title + " " + name.first + " " + name.last
    emailform.innerText = email
    streetform.innerText = location.street
    cityform.innerText = location.city
    stateform.innerText = location.state
    postcodeform.innerText = location.postcode
    date_of_birth_form.innerText =dob
    phone_form.innerText =phone
    cell_form.innerText =cell
    image.src = thumb
  }
  )

  //JSON.stringify(fetchData())
  console.log('hello')

});
