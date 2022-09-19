
let password = "ilovebirds3";
const lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const num = ['1','2','3','4','5','6','7','8','9','0']
let containsupper = false;
let containslower = false;
let containsnum = false;
for( let i = 0; i < password.length ; i++){
    let everyletter  = password[i];
    
    if(lowercase.includes(everyletter)){
        containslower = true
    } else if(uppercase.includes(everyletter)){
        containsupper = true
    }else if(num.includes(everyletter)){
        containsnum = true
    }

}if (containslower == false || containsupper == false ||containsnum == false || password.length < 10  ){
    console.log("Password Not Accepted");
}
else if (containsupper == true && containslower == true && containsnum == true){
    console.log("Password Accepted");
}
    



