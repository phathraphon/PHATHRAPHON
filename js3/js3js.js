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