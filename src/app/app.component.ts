import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  toShow ='0';
  currentvalue='';
  writeinput(value:string){
    this.currentvalue=this.currentvalue+value;
    this.toShow=this.currentvalue;
    
  }
  equals(){
    this.toShow = eval(this.currentvalue);
    this.currentvalue=this.toShow;
  }
  clear(){
    this.currentvalue='';
    this.toShow='0';
  }
  back(){
    this.currentvalue = this.currentvalue.slice(0 ,-1);
    if(this.currentvalue==''){
      this.currentvalue='0';
    }
    this.toShow = this.currentvalue;
  }

  
}

