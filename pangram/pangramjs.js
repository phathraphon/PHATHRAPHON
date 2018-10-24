function func() {
    let str = document.getElementById("inpt").value;
    console.log(str);
    str = str.toLowerCase();
    let alp = "qwertyuiopasdfghjklzxcvbnm";
    let len = str.length;
    let c;
    if (len > 25) {
        for (let i = 0; i < 26; i++) {
            c = 0;
            for (let j = 0; j < len; j++) {
                if(alp.charAt(i)==str.charAt(j)){
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


function fun() {
    let str = document.getElementById("txt").value;
    console.log(str);
    let len = str.length;
    let count = 0;
    let prev = str.charAt(0);
    console.log(prev);
    for (let a = 1; a < len; a++) {
        if (prev == str.charAt(a)) {
            count += 1;
            continue;
        }
        prev = str.charAt(a);
    }
    document.getElementById("res").innerHTML=count;
}