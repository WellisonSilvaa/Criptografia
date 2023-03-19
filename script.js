var texto2 = [];
var mostrar = "";
var res = "";
var alfabetoCrip = [85,93,52,8,55,41,101,72,57,54,21,23,122,70,38,40,125,17,84,16,35,2,19,68,3,30,78,123,120,97,26,102,71,117,75,108,107,103,29,47,100,112,11,86,56,5,9,7,87,24,42,95,18,81,61,22,37,115,14,88,77,116,39,44,106,111,64,48,74,121,124,45,10,118,28,34,69,58,66,99,49,32,36,60,119,82,110,1,59,53,105,46,12,43,127,50,27,31,126,33,109,94,65,20,15,67,76,113,62,98,51,114,89,4,104,90,92,63,79,25,73,6,13,96,91,83,80];

var alfabeto =  [];
var texto = [];
var titulo = "";
//---------//
var ch = '';
var pos = 0;
var subst = 0;
letraSub = "";
var lista = document.getElementById('list')

async function loadFile(file) {
  this.texto = await file.text();
  console.log(texto)
  titulo = file.name;

}

function criptografar() {
  loadFile()
  let letra;
  let position = 0;

  for(let i = 0; i < this.texto.length; i++) {
    letra = this.texto[i];
    console.log(letra)
    position = letra.codePointAt(pos);
    console.log(position)
    subst = this.alfabetoCrip[position];
    console.log(subst);
    letraSub = String.fromCodePoint(+(subst))
    console.log(letraSub);
    this.texto2.push(letraSub);
    // console.log(this.texto2);
    this.mostrar += this.texto2[i];
    // console.log(this.mostrar);
  }

  this.res = this.mostrar;
  console.log(this.res);
  // document.getElementById('output').textContent = this.res;
  console.log('Palavra Criptografada ASCII = ', this.res);

  lista = document.getElementById('list')
  lista.innerHTML = this.res;
  
}


//-------- Descriptografar ----------//
function descriptografar() {
  loadFile()
  let letra;
  let position = 0;

  for(let i = 0; i < this.texto.length; i++) {
    letra = this.texto[i];
    console.log('letra = ',letra);
    position = letra.codePointAt(pos);
    console.log('position = ', position);
    for(let j = 0; j < alfabetoCrip.length; j++){
      if(+(position) == alfabetoCrip[j]) {

        subst = j
        // console.log(subst);
        letraSub = String.fromCodePoint(+(subst))
        // console.log(letraSub);
        this.texto2.push(letraSub);
        // console.log(this.texto2);
        this.mostrar += this.texto2[i];
        // console.log(this.mostrar);
      }
    }
  }

  this.res = this.mostrar;
  console.log(this.res);
  // document.getElementById('output').textContent = this.res;
  console.log('Palavra Criptografada ASCII = ', this.res);

  lista = document.getElementById('list')
  lista.innerHTML = this.res;
  }

function salvar() {

    let texto = this.res;

    let titulos = titulo;

    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });

    saveAs(blob, titulos);

 }

function limpar() {
  texto2 = [];
  mostrar = "";
  res = "";
  texto = [];
  titulo = "";
  //---------//
  ch = '';
  pos = 0;
  subst = 0;
  letraSub = "";
  lista.innerHTML = this.res;

 }

 



// ------ Gerar Numeros Aleatorios -----------//
function gerandoAlfabetoBug() {
  const maxNumbers = 127;
let list = [];

for (let i = 0; i < maxNumbers; i++) {
   list[i] = i + 1;
}

console.log(list);

let randomNumber;
let tmp;

for (let i = list.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = list[randomNumber];
    // troca o número aleatório pelo atual
    list[randomNumber] = list[i];
    // troca o atual pelo aleatório
    list[i] = tmp;
   var mostrarLista = list;
}

let lista = document.getElementById('list')
lista.innerHTML = mostrarLista;
console.log('Mostrar', mostrarLista);
 }