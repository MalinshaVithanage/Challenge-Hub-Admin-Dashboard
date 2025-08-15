import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage: Storage) { }

  async uploadImage(selectedImage: File) {
    try {
      const filePath = `postIMG/${Date.now()}`;
      console.log('File path:', filePath);

      const storageRef = ref(this.storage, filePath);

      // Upload the file
      await uploadBytes(storageRef, selectedImage);

      console.log('Post image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
}
