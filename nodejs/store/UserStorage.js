let userDetails=[];

const displayUser=()=>{
    console.log(userDetails);
}
const displayEmail = (email)=>{

}
const postUsers=(user)=>{
  userDetails.push(user)
}
postUsers([{username:"pooja",password:"admin123",}])

module.exports={ displayUser, postUsers ,deleteUser,displayUserBasedEmail}