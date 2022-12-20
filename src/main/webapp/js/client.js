let input = document.getElementById("y")
let x = 0;
let y = 0;
let r = 0;
let flag = true;
let graph = document.getElementById("graph");
ctx = graph.getContext('2d');

function draw_form_dot() {
    if (r !== 0) {
        if (r < x || r < y) {
            restoreCanvas();
            document.getElementById("message").innerText = "Точку невозможно нарисовать.";
        } else {
            restoreCanvas();
            drawDot(100 + (x / r) * 80, 100 - (y / r) * 80, "",ctx);
        }
    }
}

function put_x(id) {
    document.getElementById("message").innerText = '';
    x = document.getElementById(id).value;
    draw_form_dot();
    document.cookie = "x=" + Math.round(x);
    for (let i = -5; i <= 3; i++) {
        if (x === i.toString()) {
            document.getElementById("x" + i).checked = true;
            continue;
        }
        document.getElementById("x" + i).checked = false;
    }
}

function put_r(id) {
    document.getElementById("message").innerText = '';
    r = document.getElementById(id).value;
    draw_form_dot();
    document.cookie = "r=" + Math.round(r);
    for (let i = 1; i <= 5; i++) {
        if (r === i.toString()) {
            document.getElementById("r" + i).checked = true;
            continue;
        }
        document.getElementById("r" + i).checked = false;
    }
}

function put_y() {
    document.getElementById("message").innerText = '';
    draw_form_dot();
    if (input.value.replace(/,/, ".") >= -3 && input.value.replace(/[,]/, ".") <= 5) {
        if (/([.,])$/i.test(input.value)) {
            document.getElementById("message").innerText = "Некорректные данные.";
            input.value = "";
            flag = false;
        } else {
            y = input.value.replace(/,/, ".");
            document.cookie = "y=" + y;
            flag = true;
        }
    } else if (/([.,])$/i.test(input.value)) {
        document.getElementById("message").innerText = "Некорректные данные.";
        input.value = "";
        flag = false;
    } else {
        document.getElementById("message").innerText = "Введите Y в пределах [-3;5]";
        input.value = "";
        flag = false;
    }
}

const textY = document.querySelector('#y');
if (textY !== null) {
    textY.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            put_y();
            if (flag) document.getElementById("form").submit();
        }
    });
}


function validate(e) {
    if (!/^-?\d+([.,])?\d*$/i.test(e.value)) {
        e.value = "";
    }
    if (e.value.split(/[.,]/)[1] != null) {
        if (e.value.split(/[.,]/)[1].length > 10) {
            document.getElementById("message").innerText = "Слишком большое количество знаков после запятой.";
            e.value = e.value.substring(0, 12);
        }
    }
    draw_form_dot();
}

window.onload = function () {
    let all_coolies = document.cookie.split(";");
    for (let i = 0; i < all_coolies.length; i++) {
        let params = all_coolies[i].split("=");
        let name = params[0].trim();
        if (name === "x") {
            let value = Number(params[1]);
            x = value;
            for (let i = -5; i <= 3; i++) {
                if (Math.round(value) === i) {
                    if (document.getElementById("x" + i)) document.getElementById("x" + i).checked = true;
                }
            }
        }
        if (name === "r") {
            let value = Number(params[1]);
            r = value;
            for (let i = 1; i <= 5; i++) {
                if (Math.round(value) === i) {
                    if (document.getElementById("r" + i) !== null) document.getElementById("r" + i).checked = true;
                }
            }
        }
        if (name === "y") {
            let value = Number(params[1]);
            y = value;
            if (document.getElementById("y") !== null) document.getElementById("y").value = value;
        }
    }
}

function returning() {
    let href = window.location.href.split("/");
    let new_href = '';
    for (let i = 0; i < href.length - 1; i++) {
        new_href += href[i] + '/';
    }
    window.location.href = new_href;
}

if (graph !== null) {
    graph.onclick = function (e) {
        document.getElementById("message").innerText = '';
        restoreCanvas();
        let zero_x = e.pageX - 394 - 317;
        let zero_y = -(e.pageY - 196 + 32);

        let x_val = Math.round(zero_x / 80 * r);
        let y_val = Math.floor(zero_y / 80 * r * 1000) / 1000;

        if (r !== 0) {
            if((x_val > 3 || x_val < -5) && (y_val > 5 || y_val < -3)){
                document.getElementById("message").innerText = "Невозможно определить значения x и y.";
            }
            else if(x_val > 3 || x_val < -5){
                document.getElementById("message").innerText = "Невозможно определить значение x.";
            }
            else if(y_val > 5 || y_val < -3){
                document.getElementById("message").innerText = "Невозможно определить значение y.";
            }
            else {
                drawDot(e.pageX - 294 - 317, e.pageY - 96 + 32, "",ctx);
                for (let i = -5; i <= 3; i++) {
                    if (x_val === i) {
                        document.getElementById("x" + i).checked = true;
                        continue;
                    }
                    document.getElementById("x" + i).checked = false;
                }
                document.getElementById("y").value = y_val.toString();

                document.cookie = "r=" + Math.round(r);
                document.cookie = "x=" + Math.round(x_val);
                document.cookie = "y=" + y_val;

                document.getElementById("form").submit();
            }
        } else document.getElementById("message").innerText = "Вы не ввели значение R";
    }
}
