function generatePassword() {
    const userPassword = document.getElementById('userPassword').value;
    const randomNumber = document.getElementById('randomNumber').value;
    
    
    let stringGiven = userPassword;
    let strNumber = [] ;
    let strNew = [];
    for(let a= 0;a<stringGiven.length;a++){
        strNumber[a] = stringGiven.charCodeAt(a);
    }

    let num = randomNumber,ny ;
    let i = 0, k = 32, n = 0 , m=0;
    for (i = 0, k; i < num; i++, k++) {
        if (k > 127) {
            k = 32;
        }
    }
    n = k;
    console.log(n)

    for (i = 0; i < stringGiven.length; i++) {
        m = 0;n=k;
        for (let j = 32; j < 127; j++, m++) {
            if (strNumber[i] == j) {
                ny = n+m;
                if(ny>126){
                    n=32;
                    ny = n+(ny-126)
                }
                strNew[i] = String.fromCharCode(ny);
            }
        }
    }
    const finalPassword = strNew.join("");
    document.getElementById('generated-password').textContent = `Generated password: ${finalPassword}`;
    document.getElementById('generated-password').style.opacity = "100%"
}


















