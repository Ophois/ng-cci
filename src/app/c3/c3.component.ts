import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss']
})
export class C3Component implements OnInit {
  num!:any;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.num = id;
  }

}
