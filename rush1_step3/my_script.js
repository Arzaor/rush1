function checkFormatEmail(email)
{
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function checkFormatTel(telephone)
{
    var reg = /^(0[1-7])(?:[ _.-]?(\d{2})){4}$/;
    return reg.test(telephone);
}

function checkFormatURL(url)
{
    var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    return reg.test(url);
}

function checkFormatBirthday(birthday)
{
    var reg = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    return reg.test(birthday);
}

function validation_form(event)
{
    var genre = document.forms["my_form"]["genre"];
    var civilite = document.forms["my_form"]["civilite"];
    var name = document.forms["my_form"]["name"];
    var email = document.forms["my_form"]["email"];
    var telephone = document.forms["my_form"]["telephone"];
    var website = document.forms["my_form"]["website"];
    var birthday = document.forms["my_form"]["birthday"];

    if (genre.value == "")
    {
        document.getElementById("error_sexe").style.display = 'inline-block';
        return false;
    }
    if (civilite.value == "")
    {
        document.getElementById("error_civilite").style.display = 'inline-block';
        document.getElementById("civilite").style.backgroundColor = 'red';
        return false;
    }
    if (name.value == "")
    {
        document.getElementById("error_name").style.display = 'inline-block';
        document.getElementById("name").style.backgroundColor = 'red';
        return false;
    }
    else if (name.value.length < 2)
    {
        document.getElementById("error_name").innerHTML = "Votre nom doit être supérieur à deux caractères."
        document.getElementById("error_name").style.display = 'inline-block';
        document.getElementById("name").style.backgroundColor = 'red';
        return false;
    }
    if (email.value == "")
    {
        document.getElementById("error_email").style.display = 'inline-block';
        document.getElementById("email").style.backgroundColor = 'red';
        return false;
    }
    else if (!checkFormatEmail(email.value))
    {
        document.getElementById("error_email").innerHTML = "Corrigez le format l'adresse mail."
        document.getElementById("error_email").style.display = 'inline-block';
        document.getElementById("email").style.backgroundColor = 'red';
        return false;
    }
    if (telephone.value == "")
    {
        document.getElementById("error_telephone").style.display = 'inline-block';
        document.getElementById("telephone").style.backgroundColor = 'red';
        return false;
    }
    else if (!checkFormatTel(telephone.value))
    {
        document.getElementById("error_telephone").innerHTML = "Corrigez le format de votre numéro de téléphone."
        document.getElementById("error_telephone").style.display = 'inline-block';
        document.getElementById("telephone").style.backgroundColor = 'red';
        return false;
    }
    if (website.value == "")
    {
        document.getElementById("error_website").style.display = 'inline-block';
        document.getElementById("website").style.backgroundColor = 'red';
        return false;
    }
    else if (!checkFormatURL(website.value))
    {
        document.getElementById("error_website").innerHTML = "Corrigez le format de votre site web."
        document.getElementById("error_website").style.display = 'inline-block';
        document.getElementById("website").style.backgroundColor = 'red';
        return false;
    }
    if (birthday.value == "")
    {
        document.getElementById("error_birthday").style.display = 'inline-block';
        document.getElementById("birthday").style.backgroundColor = 'red';
        return false;
    }
    else if (!checkFormatBirthday(birthday.value))
    {
        document.getElementById("error_birthday").innerHTML = "Corrigez le format de votre date de naissance."
        document.getElementById("error_birthday").style.display = 'inline-block';
        document.getElementById("birthday").style.backgroundColor = 'red';
        return false;
    }
    if (document.querySelector('input[class="checkhobbies"]:checked') == null)
    {
        document.getElementById("error_hobbies").style.display = 'inline-block';
        return false;
    }
    return true;
}