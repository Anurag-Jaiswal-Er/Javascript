const user = {
  userName: "anurag",
  LoginCount: 8,
  signedIn: true,
  getuserDetails: function () {
    //console.log("Got user details from database");
    //console.log(`Username: ${this.userName}`);
    console.log(this); // current context mai h ye batata h aur current context mai kya data h batata h
  },
};
console.log(user.getuserDetails());

// new keyword constructor hota h

function User(username, logincount, islogedin) {
  this.username = username;
  this.logincount = logincount;
  this.islogedin = islogedin;
  return this;
}

const userone = User("anurag", 13, true); //every thing
console.log(userone);
const userTwo = User("Ribanshu", 15, false);
console.log(userone); // problem is we console userone but output will come usertwo because value overwrite ho ja ri h ye problem hota h so hum hmesa new constructor ka use krte h taki value overwrite na ho aur hme problem na ho

// now we use new keyword and see

const newuserone = new User("ragni" , 14 , false)
const newusertwo = new User("Anushka " , 29 , true)
console.log(newuserone) // now value is not overwrite 
console.log(newusertwo)


