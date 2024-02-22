const dpcontainer = document.getElementById('dp-container');

// const box = 100;

for(let i = 1; i <= box; i++){

  const box = document.createElement('div');
  box.innerHTML = `${i}`
  box.classList.add('box');
  dpcontainer.append('box');

  if (i % 3 === 0 && i % 5 === 0) {
    box.innerHTML = 'FizzBuzz';
    // console.log('FizzBuzz');
  }else if(i % 3 === 0){ 
    box.innerHTML = 'Fizz';
    // console.log('Fizz');
  } else if (i % 5 === 0){
    box.innerHTML = 'Buzz';
    // console.log('Buzz');
  } else {
    box.innerHTML = `${i}`
    // console.log(i);
  }
}
  
  



