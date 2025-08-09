import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from '@angular/fire/firestore';
import { QuerySnapshot, getDoc, updateDoc} from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { doc, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  querySnapshot: any;

  constructor(private afs: Firestore, private toastr: ToastrService) {}
  saveData(data: { category: any }) {
    addDoc(collection(this.afs, 'categories'), data)
      .then((docRef) => {
        console.log('Category added with ID: ', docRef.id);
        console.log(docRef);
        this.toastr.success('Data Insert Successfully ..!');
      })
      .catch((error) => {
        console.error('Error adding category: ', error);
      });
  }
  loadData(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      getDocs(collection(this.afs, 'categories'))
        .then((querySnapshot) => {
          const data: any[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, data: doc.data() });
          });
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  
  updateData(id:string, editData:any) {
      const docRef = doc(this.afs, 'categories', id);
    updateDoc(docRef, editData).then(() => {
    this.toastr.success('Data updated Successfully ..!');
  });
  }
}
