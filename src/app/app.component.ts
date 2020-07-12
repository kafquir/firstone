import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-first-one';
  isauch= false ;
 constructor(){
  setTimeout(
     () => {
       this.isauch = true;
     }, 4000
   );
 }
 onAllumer() {
    console.log('On allume tout !');
}

}
