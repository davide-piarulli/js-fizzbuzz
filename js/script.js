
const container = document.getElementById('dp-container');
const numBox = 100;

for(let i = 1; i <= numBox; i++){

  const div = document.createElement('div');
  div.innerHTML = `${i}`;
  div.classList.add('square');
  container.append(div);

  
  if (i % 3 === 0 && i % 5 === 0) {
    div.innerHTML = 'FizzBuzz';
    // console.log('FizzBuzz');
  }else if(i % 3 === 0){ 
    div.innerHTML = 'Fizz';
    // console.log('Fizz');
  } else if (i % 5 === 0){
    div.innerHTML = 'Buzz';
    // console.log('Buzz');
  } else {
    div.innerHTML = `${i}`
    // console.log(i);
  }
}
  
  



