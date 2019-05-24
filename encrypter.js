





    let input = document.getElementById("input");
console.log(input);


function fix(){
    console.log(input.value.split(" "))
    document.getElementById("Encrypted").innerHTML = encrypt();
    document.getElementById("Decrypted").innerHTML = dencrypt();
}

function encrypt(){
    let a = input.value;
    return CryptoJS.AES.encrypt(a, "Tijl is litti smart");
}

function dencrypt(){
    let a = input.value;

    return CryptoJS.AES.decrypt(a,"Tijl is litti smart").toString(CryptoJS.enc.Utf8);
}


