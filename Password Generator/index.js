 //AA
let character =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",
     ")","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
     "Q","R","S","T","U","V","W","X","Y","Z"]

let passOptionE1 = document.getElementById("passOption-e1")
let passOptionE2 = document.getElementById("passOption-e2")
let passOptionE3 = document.getElementById("passOption-e3")
let passOptionE4 = document.getElementById("passOption-e4")
  

 //function to generate random passwords
   function generatePassword(){
     let password = ""
  for(let i = 0;i < 12;i++){
      
         let randomNum = Math.floor(Math.random()*character.length) 
         password += character[randomNum] 
    }   
        return password            
}
 //function to output generated random passwords 
   function fillPassword(){
 passOptionE1.textContent =  generatePassword()
 passOptionE2.textContent =  generatePassword() 
 passOptionE3.textContent =  generatePassword() 
 passOptionE4.textContent =  generatePassword()     
   }