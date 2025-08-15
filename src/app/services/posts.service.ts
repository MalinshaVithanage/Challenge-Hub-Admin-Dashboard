import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private storage: Storage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  async uploadImage(selectedImage: File, postData: any) {
    try {
      const filePath = `postIMG/${Date.now()}`;
      console.log('File path:', filePath);

      const storageRef = ref(this.storage, filePath);

      // Upload the file
      await uploadBytes(storageRef, selectedImage);

      console.log('Post image uploaded successfully');
      const downloadURL = await import('@angular/fire/storage').then(m => m.getDownloadURL(storageRef));
      postData.postImgPath = downloadURL;
      console.log(postData);
      this.afs.collection('posts').add(postData).then((docRef) => {
        this.toastr.success('Data Inserted Successfully');
       this.router.navigate(['/posts']);
      })
        
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

    loadData(): Observable<any[]> {
      return new Observable<any[]>((observer) => {
        getDocs(collection(this.afs.firestore, 'posts'))
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
}
