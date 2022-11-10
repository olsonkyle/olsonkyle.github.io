var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!" 
    document.getElementById('verify').style.color = 'pink';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
    document.getElementById('verify').style.fontSize = '400%';
} else {
    output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;
