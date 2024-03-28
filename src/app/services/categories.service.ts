import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { QuerySnapshot, getDoc, getDocs } from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { doc, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  querySnapshot: any;

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
  loadData(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      getDocs(collection(this.afs, 'categories')).then((querySnapshot: QuerySnapshot<any>) => {
        const data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data() });
        });
        observer.next(data);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
}