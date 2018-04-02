// homework 1
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
    alert('Число А= ' + a + '; Число Б= ' + b)}
// homework 2
function fe4() {
    var login = prompt('Введите логин'), truepassword = 'Чёрный Властелин', password;
    switch (login) {
        case null:
        case '':
            alert('Вход отменен');
            break;
        case 'Админ':
            password = prompt('Введите пароль');
            if (password === truepassword) {
                alert('Добро пожаловать!');}
                else if (password == null){alert('Вход отменен');}
                else {alert('Пароль неверен');}
            break;
        default:
            alert('Я вас не знаю');
    }
}
function fe5() {
    var login,message;
     login=prompt('Введите логин');
     (login==='Вася')? message='Привет': (login==='Директор')? message='Здравствуйте': (login==='')? message='нет логина': message='';
     alert(message);
}
function fe6() {
    var i,a=[];

    for(i=2;i<=10;i+=2) {
     a[a.length]=i;
    }
    alert(a);
}
function fe7() {
     var a=[],str,stop=0,kl=0,sum=0,long;
      str=prompt();
      if (str==null || isNaN(str) || str===''){alert('Ввод остановлен')}
          else {
          a[a.length] = str;
          do {
              str = prompt();
              if (str==null || isNaN(str) || str==='') {stop=1} else {a[a.length] = str}
          }
          while (stop===0);
          long=a.length;
          alert('Ввод остановлен');
          for(kl=0;kl<long;kl++){
              sum+=parseInt(a[kl]);
          }
        }
        alert(sum);
}
// homework 3
function fe8() {
    var obj={},kl=0;
     for (i in obj) {
        if (obj[i]) {alert(false); kl++};
        break;
     }
     if (kl==0) {alert(true)}
}
function fe9() {
    function pow(x,n) {
        var power=x;
        for (var i=1; i<n; ++i){
            power*=x;
        }
        alert(power);
    }
    var x=prompt('Число'), n=prompt('Степень');
    ((n>=1)&&(n%1===0))? pow(x,n):alert('Степень не явзляется натуральным числом.')
}
function fe10() {
    var n=+prompt('Введите n'),res=1;
    var exNumber = prompt('Каким методом вы хотите найти сумму? \n\r Цикл-1 / рекурсия-2 / прогрессия-3');
    (exNumber == 1) ? first() : (exNumber == 2) ? second() : (exNumber == 3) ? third() : alert("Такого метода не существует. Выберите 1, 2 или 3");
 // Цикл
   function first() {
       for (var i=2; i<=n; ++i){
           res+=i;
       }
       alert(res);
   }
 // Рекурсия
   function second(){
       function sumrec(cif) {
          if (cif==1) {
              return cif;
          } else{
              return cif+=sumrec(cif-1);
          }
       }
       alert(sumrec(n))
   }
 // Прогрессия
   function third(){
       alert((1+n)*n/2);
   }
}