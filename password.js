const password = "Ilovebirds3";

if ( /\d/.test(password) && password.length >= 10) {
    if(/^[a-zA-Z0-9]+$/.test(password)){
    console.log("Passward Accepted");}
    
} else console.log("Password Not Accepted")




