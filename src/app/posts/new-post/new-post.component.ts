import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  permalink: string = '';
  imgSrc: string = './assets/placeholder-image.jpg';
  selectedImg:any;

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
