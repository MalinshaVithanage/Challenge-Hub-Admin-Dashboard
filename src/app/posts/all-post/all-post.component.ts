import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-post',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './all-post.component.html',
  styleUrl: './all-post.component.css'
})
export class AllPostComponent {

  postArray: any[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.loadData().subscribe(val => {
      console.log(val);
      this.postArray = val;
    });
  }
  onDelete(postImgPath: any, id: string) {
    this.postService.deleteImage(postImgPath, id);
  }
  onFeatured(id: string, value: boolean) {
    this.postService.markFeatured(id, value);
   
  }
}
