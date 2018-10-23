var a = 0;
var res = 0;
var num = [];
var opp = [];
function fun1() {
    a = a * 10 + 1;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun2() {
    a = a * 10 + 2;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun3() {
    a = a * 10 + 3;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun4() {
    a = a * 10 + 4;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun5() {
    a = a * 10 + 5;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun6() {
    a = a * 10 + 6;
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}
function fun7() {
    a = a * 10 + 7;
    console.log(a);
    document.getElementById("demo").innerHTML=a;
}
function fun8() {
    a = a * 10 + 8;
    console.log(a);
    document.getElementById("demo").innerHTML=a;
}
function fun9() {
    a = a * 10 + 9;
    console.log(a);
    document.getElementById("demo").innerHTML=a;
}
function fun0() {
    a = a * 10 + 0;
    console.log(a);
    document.getElementById("demo").innerHTML=a;
}
function funadd() {
    num.push(a);
    opp.push('a');
    a = 0;
    console.log(a);
}
function funsub() {
    num.push(a);
    opp.push('s');
    a = 0;
    console.log(a);
}
function funmul() {
    num.push(a);
    opp.push('m');
    a = 0;
    console.log(a);
}
function fundiv() {
    num.push(a);
    opp.push('d');
    a = 0;
    console.log(a);
}
function funeq() {
    num.push(a);
    cal();
}
function fundel() {
    a = 0;
    num.length = 0;
    opp.length = 0;
    console.log(a);
}


function cal() {
    var x = 0;
    res = num[0];
    for (var i = 1; i < num.length; i++) {
        var ch = opp[x];
        if (ch == "a") {
            res += num[i];
        }
        if (ch == "s")
            res -= num[i];
        if (ch == "m")
            res *= num[i];
        if (ch == "d")
            res /= num[i];
        x += 1;
    }
    console.log(res);
    document.getElementById("demo").innerHTML = res;
}


