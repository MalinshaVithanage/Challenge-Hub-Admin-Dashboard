import { Component, inject } from '@angular/core';
import { DocumentReference, Firestore, addDoc } from '@angular/fire/firestore';
import { FormsModule, NgForm } from '@angular/forms';
import { error, log } from 'console';
// import {AngularFirestore} from '@angular/fire/firestore';
import { collection, getDocs } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
// import { FirebaseFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private afs:Firestore){}
  // afs = inject(Firestore);

  ngOnInit():void{
    
  }
  onSubmit(formData:any) {
    let categoryData = {
      category: formData.value.category
    }
    let subCategoryData = {
      subCategory:"subCategory1"
    }
    let subSubCategoryData = {
      subCategory:"subSubCategory1"
    }
    // this.afs.collection('categories').add(categoryData).then((DocumentReference: any) => {
    //   console.log(DocumentReference);
      
    // }).catch((err: any) =>{
    //   console.log(err);
      
    // })
  //   getDocs(collection(this.afs, "categories")).then((response) => {
  //     console.log(response.docs)
  //   }
  // )
//   getDocs(collection(this.afs, "categories")).then((response) => {
//   console.log(response);
// }).catch((err) => {
//   console.error("Error fetching documents:", err);
// });
//   }

// this.afs.collection('categories').add(categoryData).then(docRef => {
//   console.log(docRef);

//   this.afs.collection('categories').doc(docRef.id).collection('subCategories').add(subCategoryData).then(docRef1 => {
//     console.log(docRef1);
    
//     this.afs.collection('categories').doc(docRef.id).collection('subCategories').doc(docRef1.id).collection('subSubCategories').add(subSubCategoryData).then(docRef2 => {
//       console.log('Second Level Subcategory daved successfully');
      
//     })
//   })
//   formData.resetForm();
// })
// .catch((error) => {
//   console.error('Error adding category: ', error);
// });
// }



addDoc(collection(this.afs, 'categories'), categoryData)
      .then((docRef) => {
        console.log('Category added with ID: ', docRef.id);
        console.log(docRef);

        addDoc(collection(this.afs, 'categories', docRef.id, 'subCategories'), subCategoryData)
      .then((docRef1) => {
        console.log(docRef1);

        // this.afs.doc(`categories/${docRef.id}/subCategories/${docRef1.id}`).collection('subSubCategories').add(subCategoryData)

        addDoc(collection(this.afs, 'categories', docRef.id, 'subCategories',  docRef1.id, 'subSubCategories'), subSubCategoryData)
      .then((docRef2) => {
        console.log("Second Level Subcategory saved successfully");
      })
      })
        formData.resetForm();
      })
      .catch((error) => {
        console.error('Error adding category: ', error);
      });
  }
  

}
