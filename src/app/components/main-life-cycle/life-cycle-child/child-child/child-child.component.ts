import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit {
  @Input() name!: string

  constructor() { }

  ngOnInit(): void {
    console.log(`Child Child component (ngOnInit) - ${this.name}`)
  }

  ngOnChanges(): void {
    console.log(`Child Child component (ngOnChanges) - ${this.name}`)
  }

  ngAfterContentInit(): void {
    console.log(`Child Child component (ngAfterContentInit) - ${this.name}`)
  }
}
