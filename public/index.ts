// creat the form for register + option to change to sign in only
function handleCreatMyForm(){
    try {
        const newDiv = document.createElement("div")
        newDiv.classList.add(".newdiv")
        const myForm = ` <form onsubmit="handleRegister(e)" class="registerForm">
        <h2 class="registerForm__h2">Register Here</h2>
        <label class="registerForm__label" for="name">Name:</label>
        <input class="registerForm__input"  type="text" name="name" placeholder="enter name" required>
        <label class="registerForm__label"  for="email">Email:</label>
        <input class="registerForm__input" type="email" name="email" placeholder="enter email" required>
        <label class="registerForm__label"  for="password">Password:</label>
        <input class="registerForm__input" type="text" name="password" placeholder="enter password" required>
        <button class="registerForm__btn" type="submit">Register</button>
        </form>`
        const container = document.querySelector(".container")as HTMLDivElement | null;
       if(!container)throw new Error("couldent find main container");
        container.appendChild(newDiv)
        newDiv.innerHTML = myForm
    } catch (error) {
      console.error(error)  
    }
   
}



// the register function
function handleRegister(e){




}



// the sign in function
function handleSignIn(){
    
}