// function criptografar(){
//    var txt = document.getElementById('txt1')
//     console.log(txt.value)

//     // var  = txt.value;
// };

var texto2 = [];
var mostrar = "";
var res = "";
var alfabetoCrip = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', '?', '*', '-', '%'];

var alfabeto =     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', '?', '.'];
var texto = [];
var titulo = "";

async function loadFile(file) {
  this.texto = await file.text();
  console.log(texto)
  titulo = file.name;

  

}

function criptografar() {
  loadFile()
  let letra;
  let alfabetoLetra;
  let position;
  let subst;
  // console.log(this.alfabeto);
  for(let i = 0; i < this.texto.length; i++) {
    letra = this.texto[i];
    for (let j = 0; j < this.alfabeto.length; j++) {
      alfabetoLetra = this.alfabeto[j];
      if(letra == alfabetoLetra) {
        position = j;
        subst = this.alfabetoCrip[j];
        
        this.texto2.push(subst);
        this.mostrar += this.texto2[i];

      }
      
    }
  }
  this.mostrar += '?';
  // console.log(this.texto2);
  this.texto2 = [];
  this.texto = [];
  this.res = this.mostrar;
  this.texto = this.res;
  // console.log(this.mostrar);
  document.getElementById('output').textContent = this.res;
  console.log(res);
  console.log(titulo);
  
}

function descriptografar() {
  loadFile()
    let letra;
    let alfabetoLetraCrip;
    let position;
    let subst;
    // console.log(this.texto[2]);
    for(let i = 0; i < this.texto.length; i++) {
      letra = this.texto[i];
      for (let j = 0; j < this.alfabetoCrip.length; j++) {
        alfabetoLetraCrip = this.alfabetoCrip[j];
        if(letra == alfabetoLetraCrip) {
          position = j;
          subst = this.alfabeto[j];
          
          this.texto2.push(subst);
          this.mostrar += this.texto2[i]; 

        }
        
      }
    }
    this.mostrar += ' ';
    // console.log(this.texto2);
    this.texto2 = [];
    this.texto = [];
    this.res = this.mostrar;
    this.texto = this.res;
    console.log(this.mostrar);
    
    console.log(res);
    console.log(titulo);
  }

function salvar() {

    let texto = this.res;

    let titulos = titulo;

    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });

    saveAs(blob, titulos + ".txt");

 }

function limpar() {
texto = []
texto2 = []
res = ""
mostrar = ""

 }