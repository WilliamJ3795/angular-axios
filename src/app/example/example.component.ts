import { Component } from '@angular/core';

import { Post } from '../post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(private apiService: ApiService) {}
  posts:Post[] = [];
  userId:number = 10;
  title:string = "William";
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.apiService.get('posts').then((response) => {
      console.log('Data:', response.data);
      this.userId = response.data[0].userId;
      this.title = response.data[0].title;
      this.posts = response.data;
    }
    );
  }
}
