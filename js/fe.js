function fe1() {
    var c1, c2;
    c1=+prompt('Введите первое число');
    c2=+prompt('Введите второе число');
    alert('Сумма первого и второго числа = ' + (c1 + c2));
}
function fe2() {
    var c,m,p,d,y;
    c=+prompt('Введите число');
    m=+prompt('Сколько отнять?');
    p=+prompt('Сколько прибавить?');
    d=+prompt('На сколько разделить?');
    y=+prompt('На сколько умножить?');
    alert('('+c+'-'+m+'+'+p+')/'+d+'*'+y+'='+(((c-m +p)/d)*y));
}
function fe3() {
    var a, b, dp;
    a = prompt('Введите число А');
    b = prompt('Введите число Б');
    dp = a;
    a = b;
    b = dp;
    alert('Число А= ' + a + '; Число Б= ' + b)
}