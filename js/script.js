
const container = document.getElementById('dp-container');
const numBox = 100;

for(let i = 1; i <= numBox; i++){

  // creo elemento DIV. 
  // inserisco al suo interno la variabile i. 
  // aggiungo al DIV la classe square per renderlo un quadrato. 
  // gli dico di essere figlio del suo container.
  const div = document.createElement('div');
  div.innerHTML = `${i}`;
  div.classList.add('square');
  container.append(div);

  if (i % 3 === 0 && i % 5 === 0) {
    div.innerHTML = 'FizzBuzz';
    div.classList.add('bg-red')
    // console.log('FizzBuzz');
  }else if(i % 3 === 0){ 
    div.innerHTML = 'Fizz';
    div.classList.add('bg-green')
    // console.log('Fizz');
  } else if (i % 5 === 0){
    div.innerHTML = 'Buzz';
    div.classList.add('bg-yellow')
    // console.log('Buzz');
  } else {
    div.innerHTML = `${i}`
    div.classList.add('bg-blue')
    // console.log(i);
  }
}
  
  



