//indexing starts with 0
function fibonacci(index) {
  f_0 = 0;
  f_1 = 1;
  f_2 = 1;
  let f_n;

  if(index === 0){
    return f_0;
  } else if (index === 1) {
    return f_1;
  } else if(index === 2) {
    return f_2;
  } else{
    for (let i = 3; i <= index; i++) {
      f_n = f_1 + f_2;
      f_1 = f_2;
      f_2 = f_n;
    }
    return f_n;
  }
}

let index;
do{
  index = prompt("Input index: ");
} while(Math.sign(index) < 0);
alert(fibonacci(Number(index)));