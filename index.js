const form = document.getElementById("signup-form");
const postForm = document.querySelector("#post-form")
const imageSelector = document.querySelector("input[type='file']")
const imagePreview = document.querySelector("#img-preview")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const jsonObject = {
        name: form.name.value,
        email: form.email.value,
        gender: form.gender.value,
        dob: form.dob.value,
        password: form.password.value
    }

    console.log( jsonObject );

    const promise = fetch('http://localhost:3005/people', {
        method:"POST",
        body: JSON.stringify(jsonObject),
        headers:{
            "Content-Type":"application/json"
        }
    });

    promise.then(response=>{
        console.log(response)
    })

    // const name = document.querySelector("#name");
    // const email = document.querySelector("#email")
});

console.log(imageSelector)

let previewImageUrl='';

const submitFunction = function(){
    
}

imageSelector.addEventListener("change", (e)=>{
    console.log(e.target.files)
    const file = e.target.files[0];
    const fr = new FileReader();

    fr.onload = function(evt){
        previewImageUrl = evt.target.result
        console.log(previewImageUrl)
        imagePreview.src = previewImageUrl;
        imagePreview.classList.remove("d-none")
        imagePreview.classList.add("d-block")
    }

    fr.readAsDataURL(file)
});

function getPosts(){
    fetch("http://localhost:3005/posts")
    .then( response=>{
        console.log(response)
    } );
}

postForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const jsonObject = {
        message: postForm.message.value,
        image: previewImageUrl
    }

    console.log(jsonObject)
});

getPosts()