let getTextFromInputFeild = (id) => {
    let inputFeild = document.getElementById(id);
    let inputValue = inputFeild.value;
    inputFeild.value = '';
    return inputValue
}

let addName = () => {
    let name = getTextFromInputFeild('name-feild')
    localStorage.setItem('Name', name)
}




let delateName = () => {
    localStorage.removeItem('Name')

}


let addEmail = () => {
    let email = getTextFromInputFeild('email-feild')
    localStorage.setItem('Email', email);


}


let delateEmail = () => {
    localStorage.removeItem('Email')


}
let addComment = () => {
    let comment = getTextFromInputFeild('comment-feild')
    localStorage.setItem('Comment', comment);
}


let delateComment = () => {
    localStorage.removeItem('Comment');
}


let resetAll = () => {
    localStorage.clear();
    displayStoreInfo();
}

let submitAll = () => {
    let name = localStorage.getItem('Name');
    let email = localStorage.getItem('Email');
    let comment = localStorage.getItem('Comment');

    let getPerson = JSON.parse(localStorage.getItem('Person'));
    if (!getPerson) {
        let person = [
            {
                Name: name,
                Email: email,
                Comment: comment,
            }
        ]
        localStorage.setItem('Person', JSON.stringify(person));
    }
    else {
        let person = [
            ...getPerson,
            {
                Name: name,
                Email: email,
                Comment: comment,
            }
        ]
        localStorage.setItem('Person', JSON.stringify(person));
        // console.log(person)
    }

    displayStoreInfo();
}

let displayStoreInfo = () => {
    let personINfo = JSON.parse(localStorage.getItem('Person'));
    console.log(personINfo);
    let div = document.getElementById('div');
    div.innerHTML = ''
    personINfo.forEach(person => {
        console.log(person);
        div.innerHTML += `
            <h5>Name : ${person.Name}</h5>
            <h5>Email : ${person.Email}</h5>
            <h5 class="pb-4">Professtion : ${person.Comment}</h5>
     `
    })

}
displayStoreInfo();
