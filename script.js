var texto2 = [];
var mostrar = "";
var res = "";
var alfabetoCrip = [116,177,141,170,187,15,37,2,169,89,106,69,78,142,67,42,111,178,137,56,250,220,204,150,65,90,109,33,239,118,172,201,88,80,242,124,9,71,117,102,210,112,26,79,231,96,229,115,248,23,74,232,70,224,189,123,82,226,39,52,159,47,11,86,51,171,129,119,246,5,217,34,101,21,199,8,87,35,175,234,194,195,50,66,154,32,3,243,107,160,126,68,251,235,165,209,161,44,1,131,125,164,94,135,147,205,155,180,57,73,53,151,30,211,105,254,227,84,98,208,103,166,139,190,62,197,173,144,241,244,40,138,223,45,218,12,179,7,146,143,28,121,128,245,149,196,202,174,83,55,162,95,183,17,206,237,10,136,93,24,6,207,225,247,134,192,91,59,152,253,120,64,22,81,49,46,213,4,184,153,215,132,27,158,191,29,212,20,25,221,238,140,31,186,38,58,219,167,233,110,14,168,75,222,148,16,63,176,228,145,185,193,214,85,216,156,157,41,240,249,113,108,100,77,48,72,163,76,114,97,200,43,188,130,19,104,203,92,122,61,252,54,198,99,230,18,36,133,181,60,127,182,236,13];

var alfabeto =  [];
var texto = [];
var titulo = "";
//---------//
var ch = '';
var pos = 0;
var subst = 0;
letraSub = "";
var lista = document.getElementById('list');

document.getElementById("botao").disabled = true;
 
function addEventListener(event) {
    
  //busca conteúdo do input
    var conteudo = this.mostrar;
  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botao").disabled = true;
    }
};

//-----------//--------------//
async function loadFile(file) {
  this.texto = await file.text();
  console.log(texto)
  titulo = file.name;

}

 ///-------------////--------------
function criptografar() {
  loadFile()
  let letra;
  let position = 0;


  for(let i = 0; i < this.texto.length; i++) {
    letra = this.texto[i];
    console.log(letra);
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
  this.mostrar;

  window.alert("Arquivo Criptografado com sucesso!");
  document.getElementById("botao").disabled = false;
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
  this.mostrar;

  window.alert("Arquivo descriptografado com sucesso!");
  document.getElementById("botao").disabled = false;

  }

function gerar() {
  

    let texto = this.res;

    let titulos = titulo;

    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });

    saveAs(blob, titulos);

    limpar();
    document.getElementById("botao").disabled = true;

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
  input = "";
  document.getElementById("botao").disabled = true;

 }

 



// ------ Gerar Numeros Aleatorios -----------//
// function gerandoAlfabetoBug() {
//   const maxNumbers = 254;
// let list = [];

// for (let i = 0; i < maxNumbers; i++) {
//    list[i] = i + 1;
// }

// console.log(list);

// let randomNumber;
// let tmp;

// for (let i = list.length; i;) {
//     randomNumber = Math.random() * i-- | 0;
//     tmp = list[randomNumber];
//     // troca o número aleatório pelo atual
//     list[randomNumber] = list[i];
//     // troca o atual pelo aleatório
//     list[i] = tmp;
//    var mostrarLista = list;
// }

// let lista = document.getElementById('list')
// lista.innerHTML = mostrarLista;
// console.log('Mostrar', mostrarLista);
//  }

//  function teste() {
//   let letra = 'à'
//   position = letra.codePointAt(pos);
//   console.log('Indice = ',position);
//  }
//  function teste2() {
//   subst = 231;
//   letraSub = String.fromCodePoint(+(position))
//   console.log('Letra = ',letraSub);
//  }