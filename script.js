function Submit(form) {
    var x;
    var a, b;
    a = parseInt(form.a.value);
    b = parseInt(form.b.value);

    if (a == 0) {
        if (b == 0);
        else;
    } else {
        x = b / a;
        form.x.value = eval(x);
    }
}


function myFunction() {
    document.getElementById("myForm").reset();
}