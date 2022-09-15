import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';
  aparecerinput='0'
  currvalue=''

  aparecer(value:string){
    this.currvalue = this.currvalue + value
    this.aparecerinput = this.currvalue
  }

  igual(){
    this.aparecerinput = eval(this.currvalue)
    this.currvalue = this.aparecerinput
  }

  limpar(){
    this.currvalue='';
    this.aparecerinput = '0'
  }
}
