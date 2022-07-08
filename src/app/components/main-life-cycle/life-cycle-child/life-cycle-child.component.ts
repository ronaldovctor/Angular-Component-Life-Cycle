import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifeCycleEvent } from 'src/app/models/LifeCycleEvent';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.scss']
})
export class LifeCycleChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name!: string
  @Input() age!: number
  @Input() food!: string

  public events: LifeCycleEvent[] = []
  nextEventId: number = 0
  colors: string[] = ['accent', 'warn', 'primary']

  constructor() { 
    console.log(`${this.name} - Constructor`)
    this.newEvent('Constructor')
  }

  ngOnInit(): void {
    console.log(`${this.name} - ngOnInit`)
    this.newEvent('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.name} - ngOnChanges`)
    this.newEvent('ngOnChanges')
  }

  ngAfterContentInit(): void{
    console.log(`${this.name} - ngAfterContentInit`)
    this.newEvent('ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log(`${this.name} - ngAfterViewInit`)
    this.newEvent('ngAfterViewInit')
  }

  ngOnDestroy(): void { // Um exemplo de uso seria limpar algum setInterval que seja executado enquanto o componente está ativo.
    console.log(`${this.name} - ngOnDestroy`)
    this.newEvent('ngOnDestroy')
  }

  newEvent(name: string): void {
    let id = this.nextEventId++
    this.events.push(
      {id:this.nextEventId, name: name, color: this.colors[id % this.colors.length]}
    )

    setTimeout(() => {
      let idx = this.events.findIndex((e)=> e.id == id)
      if(idx >= 0)
        this.events.splice(idx, 1)
    }, 2000 + this.events.length * 2000)
  }
}
