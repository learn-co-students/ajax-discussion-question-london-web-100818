const addPersonButton = document.getElementsByClassName("btn-primary")[0]

addPersonButton.addEventListener('click', fetchUser)

function fetchUser() {
  
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(render)

   function render(response){
      const userData = response.results[0]
      console.log(userData)
        document.getElementById("fullname").innerText = `${capitalise(userData.name.first)} ${capitalise(userData.name.last)}`
        document.getElementById("email").innerText = userData.email
        document.getElementById("street").innerText = userData.location.street
        document.getElementById("city").innerText = userData.location.city
        document.getElementById("state").innerText = userData.location.state
        document.getElementById("postcode").innerText = userData.location.postcode
        document.getElementById("phone").innerText = userData.phone
        document.getElementById("cell").innerText = userData.cell
        document.getElementById("date_of_birth").innerText = userData.dob.date
        document.getElementById("profile_picture").src = userData.picture.thumbnail
    }

    function capitalise(word) {
      return word[0].toUpperCase() + word.substr(1)
    }
}
