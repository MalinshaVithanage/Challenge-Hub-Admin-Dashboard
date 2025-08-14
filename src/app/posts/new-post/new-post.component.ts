import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule, AngularEditorModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  permalink: string = '';
  imgSrc: string = './assets/placeholder-image.jpg';
  selectedImg:any;

  categories: any[] = [];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit():void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val;
    });

  }
  onTitleChanged(event: any) {
    const title = event.target.value;
    this.permalink = title.replace(/\s/g, '-'); 
  }
  showPreview(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imgSrc = e.target.result;
    } 
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg = event.target.files[0];
  }
}
