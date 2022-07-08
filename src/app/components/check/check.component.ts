import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  name!: string
  age!: number

  constructor() { 
    console.log('Check component - ngOnInit')
  }

  ngOnInit(): void {
    console.log('Check component - ngOnInit')
  }

  ngOnChanges(): void {
    console.log('Check component - ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('Check component - ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('Check component - ngDongAfterContentInitCheck')
  }

  ngAfterContentChecked(): void {
    console.log('Check component - ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('Check component - ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('Check component - ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('Check component - ngOnDestroy')
  }
}
