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

function fe8() {
   var user={name :"Кирилл", age: "20"};
    console.log(user.age);
    user.age='24';
    console.log(user.age);

    for (var k in user) {
        console.log(k +' '+ user[k]);
    }
    delete user.name;
    for (var k in user) {
        console.log(k +' '+ user[k]);
    }
    console.log(name in user);
} git push -u origin master 