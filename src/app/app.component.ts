import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CategoriesComponent } from './categories/categories.component';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
// import {AngularFireModule} from '@angular/fire';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent, ]
})
export class AppComponent implements OnInit {
  title = 'server';
  // firestore = inject(Firestore);

  ngOnInit() {
    // getDocs(collection(this.firestore, "testPath")).then((response) => {
    //   console.log(response.docs)
    // }
  // )
}

}
