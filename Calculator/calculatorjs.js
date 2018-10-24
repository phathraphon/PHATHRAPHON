var a = 0;
var res = 0;
var num = [];
var opp = [];
var dis = '';
function fun1() {
    a = a * 10 + 1;
    dis += '1';
    document.getElementById("input").innerHTML = dis;
}
function fun2() {
    a = a * 10 + 2;
    dis += '2';
    document.getElementById("input").innerHTML = dis;
}
function fun3() {
    a = a * 10 + 3;
    dis += '3';
    document.getElementById("input").innerHTML = dis;
}
function fun4() {
    a = a * 10 + 4;
    dis += '4';
    document.getElementById("input").innerHTML = dis;
}
function fun5() {
    a = a * 10 + 5;
    dis += '5';
    document.getElementById("input").innerHTML = dis;
}
function fun6() {
    a = a * 10 + 6;
    dis += '6';
    document.getElementById("input").innerHTML = dis;
}
function fun7() {
    a = a * 10 + 7;
    dis += '7';
    document.getElementById("input").innerHTML = dis;
}
function fun8() {
    a = a * 10 + 8;
    dis += '8';
    document.getElementById("input").innerHTML = dis;
}
function fun9() {
    a = a * 10 + 9;
    dis += '9';
    document.getElementById("input").innerHTML = dis;
}
function fun0() {
    a = a * 10 + 0;
    dis += '0';
    document.getElementById("input").innerHTML = dis;
}
function funadd() {
    num.push(a);
    opp.push('a');
    dis = dis+"+";
    a = 0;
    document.getElementById("input").innerHTML = dis;
}
function funsub() {
    num.push(a);
    opp.push('s');
    dis = dis+"-";
    a = 0;
    document.getElementById("input").innerHTML = dis;
}
function funmul() {
    num.push(a);
    opp.push('m');
    dis = dis+"*";
    a = 0;
    document.getElementById("input").innerHTML = dis;
}
function fundiv() {
    num.push(a);
    opp.push('d');
    dis = dis+"/";
    a = 0;
    document.getElementById("input").innerHTML = dis;
}
function funeq() {
    num.push(a);
    console.log(a);
    cal();
}
function fundel() {
    a = 0;
    num.length = 0;
    opp.length = 0;
    dis = '';
    a=0;
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}


function cal() {
    console.log(num);
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
    document.getElementById("input").innerHTML = dis+"=";
    num.length=0;
    opp.length=0;
    a=res;
    console.log(num);
    console.log(res);
    console.log(num);
    document.getElementById("result").innerHTML = res;
}


