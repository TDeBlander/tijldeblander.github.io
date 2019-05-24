





    let input = document.getElementById("input");

    let inputd = document.getElementById("inputd");


function fix(){
    document.getElementById("Encrypted").innerHTML = encrypt();
}

function unfix(){
    document.getElementById("Decrypted").innerHTML = dencrypt();
}

function encrypt(){
    let a = input.value;
    return CryptoJS.AES.encrypt(a, "Tijl is litti smart");
}

function dencrypt(){
    let a = inputd.value;
    return CryptoJS.AES.decrypt(a,"Tijl is litti smart").toString(CryptoJS.enc.Utf8);
}


