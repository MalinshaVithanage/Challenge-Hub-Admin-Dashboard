import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: Firestore, private toastr: ToastrService) { }
  saveData(data: { category: any; }) {

    addDoc(collection(this.afs, 'categories'), data)
      .then((docRef) => {
        console.log('Category added with ID: ', docRef.id);
        console.log(docRef);
        this.toastr.success('Data Insert Successfully ..!')
      })
      .catch((error) => {
        console.error('Error adding category: ', error);
      });
  }

}

