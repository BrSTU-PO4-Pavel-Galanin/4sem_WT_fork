   function task_1() {
      while(true){
      a = prompt('Введите первое число', null);
      if (isNaN(a)) {                           //проверка на коректность первого введённого числа
        alert("Вы ввели не число!");
        break;
      }

      b = prompt('Введите второе число', null);
      if (isNaN(b)) {                           //проверка на коректность второго введённого числа
        alert("Вы ввели не число!");
        break;
      }
      let a1 = Number (a);
	    let b1 = Number (b);

      if(a1 > b1){										
        alert("Первое число больше!");
        break;
      } else if (a1 < b1){								//сравнение двух чисел	
        alert("Второе число больше!");
        break;
      } else{
        alert("Числа равны!");
        break;
      }
      }
    }