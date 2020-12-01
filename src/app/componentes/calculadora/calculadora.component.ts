import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numero1: number=0;
  numero2 : number=0;
  resultado : any;
  numeros : string ="";
  concatenar : string="";
  operacion : string="";

  constructor() { }

  ngOnInit(): void {
  }
  nueve(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"9";
  }
  ocho(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"8";
  }
  siete(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"7";
  }
  seis(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"6";
  }
  cinco(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"5";
  }
  cuatro(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"4";
  }
  tres(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"3";
  }
  dos(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"2";
  }
  uno(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"1";
  }
  cero(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+"0";
  }
  borrar(){
    this.numeros="";
    this.resultado=0;
  }
  sumar(){
    this.operacion="+";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.numeros="";
  }
  dividir(){
    this.operacion="/";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.numeros="";
  }
  multiplicar(){
    this.operacion="*";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.numeros="";
  }
  restar(){
    this.operacion="-";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.numeros="";
  }
  resultados(){
    this.concatenar=this.numeros;
    this.numero2=parseFloat(this.concatenar);
    if(this.operacion === "+"){
      this.numeros="";
      this.resultado=this.numero1+this.numero2;
    }
    if(this.operacion === "/"){
      this.numeros="";
      this.resultado=this.numero1/this.numero2;
    }
    if(this.operacion === "*"){
      this.numeros="";
      this.resultado=this.numero1*this.numero2;
    }
    if(this.operacion === "-"){
      this.numeros="";
      this.resultado=this.numero1-this.numero2;
    }

    this.numeros=String(this.resultado);
  }
  negativo(){
    this.operacion="neg";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.numeros="";
    this.resultado=this.numero1*(-1);
    this.numeros=this.resultado;
  }
  raiz(){
    this.operacion="√";
    this.concatenar=this.numeros;
    this.numero1=parseFloat(this.concatenar);
    this.resultado=Math.sqrt(this.numero1);
    this.numeros=this.resultado;
  }
  punto(){
    this.concatenar=this.numeros;
    this.numeros=this.concatenar+".";
  }
}
