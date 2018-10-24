function func() {
    let str = document.getElementById("inpt").value;
    str = str.toLowerCase();
    let alp = "qwertyuiopasdfghjklzxcvbnm";
    let len = str.length;
    let c;
    if (len > 25) {
        for (let i = 0; i < 26; i++) {
            c = 0;
            for (let j = 0; j < len; j++) {
                if(alp.charAt(i)==str.charAt(j)||alp.charAt(i)==" "){
                    c=1;
                    break;
                }
            }
            if (c==0)
            break;
        }
    }
    if (c==1)
    document.getElementById("result").innerHTML="Pangram";
    else
    document.getElementById("result").innerHTML="Not Pangram";
}       