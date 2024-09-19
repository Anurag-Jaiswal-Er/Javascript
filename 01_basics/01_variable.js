const id = "12345"
var password = "12345"
let acountemail = "anuragjaiswal@gmail.com"
// never use var in javascript because of issue in block scope and functional scope
// if in javascript u declare only a  variable and not assinged a proper value the it should be
// undefined
let accountState; 
console.table([id , password , acountemail , accountState ]);