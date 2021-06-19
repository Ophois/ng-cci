import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  kice = 'Chewbacca';
  rep: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  reponse(evt: string)
  {
    this.rep = evt;
  }
}
