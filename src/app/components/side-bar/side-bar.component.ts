import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  option ='home'

  vista(pagina: string){
    this.option = pagina
    console.log(this.option)
  }
}
