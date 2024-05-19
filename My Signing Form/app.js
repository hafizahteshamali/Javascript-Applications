
function RegistrationSubmission(){
    event.preventDefault();
    let first_name = document.getElementById('first_name');
    let last_name = document.getElementById('last_name');
    let user_country = document.getElementById('user_country');
    let email_address = document.getElementById('email_address');
    let user_Password = document.getElementById('user_Password');

    let firstname_place = document.getElementById('firstname_place');
    let lastname_place = document.getElementById('lastname_place');
    let countryname_place = document.getElementById('countryname_place');
    let resgistration_date = document.getElementById('resgistration_date');
    let resgistration_time = document.getElementById('resgistration_time');
    let email_place = document.getElementById('email_place');
    let password_place = document.getElementById('password_place');
    
    let date = new Date();

    if(first_name.value.trim() == "" || last_name.value.trim() == "" || user_country.value.trim() == "" || email_address.value.trim() == "" || user_Password.value.trim() == ""){
        swal("Error", "Please input All Field");
    }
    firstname_place.innerText += `${first_name.value} \n`;
    lastname_place.innerText += `${last_name.value} \n`;
    countryname_place.innerText += `${user_country.value}\n`;
    resgistration_date.innerText += `${date.getFullYear()}/${date.getDate()}/${date.getMonth()}\n`;
    resgistration_time.innerText += `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} \n`;
    email_place.innerText += `${email_address.value} \n`;
    password_place.innerText += `${user_Password.value}\n`;

    first_name.value = "";
    last_name.value = "";
    user_country.value = "";
    email_address.value = "";
    user_Password.value ="";
}
let year = new Date();
let copy_right_place = document.getElementById('copy_right_place');
copy_right_place.innerText = `Copyright @ ${year.getFullYear()} Hafiz Ahtesham Ali All Right Reserved`;

