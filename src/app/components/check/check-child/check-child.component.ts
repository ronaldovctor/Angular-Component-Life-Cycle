import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.scss']
})
export class CheckChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Check-child component - ngOnInit')
  }

  ngOnChanges(): void {
    console.log('Check-child component - ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('Check-child component - ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('Check-child component - ngDongAfterContentInitCheck')
  }

  ngAfterContentChecked(): void {
    console.log('Check-child component - ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('Check-child component - ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('Check-child component - ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('Check-child component - ngOnDestroy')
  }

}
