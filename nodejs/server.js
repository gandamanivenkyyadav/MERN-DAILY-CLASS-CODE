const {display,test, name}=require("./model");

display();
const testResult=test()
console.log(testResult);
console.log(name)

console.log("-----------------------");

const {displayUser, postUser, displayUserBasedEmail, postUsers}=require("./store/UserStorage");
console.log("before post users: ",displayUser());

postUsers({name:"ravi",email:"ravi@gmail.com"});
postUsers({name:"pavi",email:"pavi@gmail.com"});
postUsers({name:"raju",email:"raju@gamil"});

deleteUser("pavi");
console.log("after delete User:", displayUser());

console.log("Email: ravi@gmail.com",displayUserBasedEmail('ravi@gmail.com'));



