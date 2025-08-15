import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private storage: Storage,
    private afs: AngularFirestore,
    private toastr: ToastrService
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
       
      })
        
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
}
