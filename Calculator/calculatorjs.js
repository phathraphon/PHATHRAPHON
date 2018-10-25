var a = 0;
var res = 0;
var num = [];
var opp = [];
var dis = '';
let temp;
let ui;
let neg = 0;
function fun1() {
    a = a * 10 + 1;
    dis += '1';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun2() {
    a = a * 10 + 2;
    dis += '2';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun3() {
    a = a * 10 + 3;
    dis += '3';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun4() {
    a = a * 10 + 4;
    dis += '4';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun5() {
    a = a * 10 + 5;
    dis += '5';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun6() {
    a = a * 10 + 6;
    dis += '6';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun7() {
    a = a * 10 + 7;
    dis += '7';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun8() {
    a = a * 10 + 8;
    dis += '8';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun9() {
    a = a * 10 + 9;
    dis += '9';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function fun0() {
    a = a * 10 + 0;
    dis += '0';
    ui = 0;
    document.getElementById("input").innerHTML = dis;
}
function funadd() {
    temp = dis.length - 1;
    if ((dis.charAt(temp) != "+") && (dis.charAt(temp) != "-") && (dis.charAt(temp) != "*") && (dis.charAt(temp) != "/")) {
        if (neg == 1) {
            a = a * (-1);
            neg = 0;
        } 
        num.push(a);
        opp.push('a');
        dis = dis + "+";
        a = 0;
        ui = 1;
        document.getElementById("input").innerHTML = dis;
    }
}
function funsub() {
    temp = dis.length - 1;
    if (ui == 1) {
        if ((dis.charAt(temp) == "+") || (dis.charAt(temp) == "-") || (dis.charAt(temp) == "*") || (dis.charAt(temp) == "/")) {
            dis += "-";
            neg = 1;
            ui += 1;
            document.getElementById("input").innerHTML = dis;
        }
    }
    if (ui == 0) {
        if ((opp[temp] != "a") && (opp[temp] != "s") && (opp[temp] != "m") && (opp[temp] != "d")) {
            if (neg == 1) {
                a = a * (-1);
                neg = 0;
            }
            num.push(a);
            opp.push('s');
            dis = dis + "-";
            a = 0;
            ui = 1;
            document.getElementById("input").innerHTML = dis;
        }
    }
}
function funmul() {
    temp = dis.length - 1;
    if ((dis.charAt(temp) != "+") && (dis.charAt(temp) != "-") && (dis.charAt(temp) != "*") && (dis.charAt(temp) != "/")) {
        if (neg == 1) {
            a = a * (-1);
            neg = 0;
        }
        num.push(a);
        opp.push('m');
        dis = dis + "*";
        a = 0;
        ui = 1;
        document.getElementById("input").innerHTML = dis;
    }
}
function fundiv() {
    temp = dis.length - 1;
    if ((dis.charAt(temp) != "+") && (dis.charAt(temp) != "-") && (dis.charAt(temp) != "*") && (dis.charAt(temp) != "/")) {
        if (neg == 1) {
            a = a * (-1);
            neg = 0;
        }
        num.push(a);
        opp.push('d');
        dis = dis + "/";
        a = 0;
        ui = 1;
        document.getElementById("input").innerHTML = dis;
    }
}

function funeq() {
    temp = dis.length - 1;
    if ((dis.charAt(temp) != "+") && (dis.charAt(temp) != "-") && (dis.charAt(temp) != "*") && (dis.charAt(temp) != "/")) {
        if (neg == 1) {
            a = a * (-1);
            neg = 0;
        }
        num.push(a);
        cal();
    }
}
function fundel() {
    a = 0;
    num.length = 0;
    opp.length = 0;
    dis = '';
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "";
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
    document.getElementById("input").innerHTML = dis + "=";
    num.length = 0;
    opp.length = 0;
    a = res;
    document.getElementById("result").innerHTML = res;
}


