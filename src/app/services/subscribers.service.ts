import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
 
  constructor(private afs: Firestore, private toastr: ToastrService) {}

  loadData(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      getDocs(collection(this.afs, 'subscribers'))
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

  deleteData(id: string) {
    const docRef = doc(this.afs, 'subscribers', id);
    deleteDoc(docRef).then(() => {
      this.toastr.success('Data deleted Successfully ..!');
    });
  }
}
