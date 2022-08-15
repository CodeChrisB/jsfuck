
const zero = '+[]';
const one = '+!![]';

const number = n => {
  if (n === 0) return zero;
  return Array.from({length: n}, () => one).join(' + ');
}




const fromString = s =>s.split('').map(x => {
  if (!(x in map)) {
    const charCode = x.charCodeAt(0);
    return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
  }
  return map[x];
}).join('+');
let  map = {};
map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;

const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;

function transpile(){
  let js = document.getElementById("jsCode").value
  let fuck = document.getElementById("jsFuck")

  fuck.innerHTML = compile(js)

}

function callFuck(){
  let fuck = document.getElementById("jsFuck").value
  if(fuck==='')
    alert('Error : Nothing to compute')
  eval(fuck)
}

function load(){
document.getElementById("jsCode").value = `
//Check whether the input number is prime
function isPrime(num) {
  for ( var i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
          return false;
      }
  }
  return true;
}

// Display all primes in the range of 0 to n
function display(n) {
    let list = []
    var arr = [2];
    for ( var i = 3; i <= n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
            console.log(i)
        }
    }
    
}

display(100);`
}


/*Overriding the console log function to grab the text from it*/

//anytime later
var cl = console.log;
console.log = function() {
  cl.apply(this, arguments);
  document.getElementById("console").innerHTML+=[arguments[0],'<br/>'].join('')
};


var cc = console.clear;
console.clear = function() {
  cc.apply(this, arguments);
  document.getElementById("console").innerHTML=""
};
