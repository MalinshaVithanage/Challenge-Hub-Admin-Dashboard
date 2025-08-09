import { Component, inject,   OnInit } from '@angular/core';
import { addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
import { log } from 'console';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categoryArray: any[] = [];
  constructor(private categoryService: CategoriesService) {}
  // afs = inject(Firestore);

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((val) => {
      console.log(val);
      this.categoryArray = val;
    });
  }
  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    this.categoryService.saveData(categoryData);
    formData.resetForm();

    // addDoc(collection(this.afs, 'categories'), categoryData)
    //   .then((docRef) => {
    //     console.log('Category added with ID: ', docRef.id);
    //     console.log(docRef);

    //     addDoc(
    //       collection(this.afs, 'categories', docRef.id, 'subCategories'),
    //       subCategoryData
    //     ).then((docRef1) => {
    //       console.log(docRef1);

    //       // this.afs.doc(`categories/${docRef.id}/subCategories/${docRef1.id}`).collection('subSubCategories').add(subCategoryData)

    //       addDoc(
    //         collection(
    //           this.afs,
    //           'categories',
    //           docRef.id,
    //           'subCategories',
    //           docRef1.id,
    //           'subSubCategories'
    //         ),
    //         subSubCategoryData
    //       ).then((docRef2) => {
    //         console.log('Second Level Subcategory saved successfully');
    //       });
    //     });
    //     formData.resetForm();
    //   })
    //   .catch((error) => {
    //     console.error('Error adding category: ', error);
    //   });
  }
}
