import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.scss']
})
export class MainLifeCycleComponent implements OnInit {
  foods: string[] = ['Rice', 'Food', 'Pizza']
  name!: string 
  age!: number
  food!: string
  clients: Client[] = []
  onEdit: number = -1
  randomNumber!: number

  constructor() {
    this.generateRandomNumber() 
  }

  ngOnInit(): void {

  }

  generateRandomNumber(): void{
    this.randomNumber = Math.round(Math.random() * 1000)
  }

  save(): void {
    if(this.onEdit == -1)
      this.clients.push({ name: this.name, age: this.age, food: this.food })
    else{
      this.clients[this.onEdit].name = this.name
      this.clients[this.onEdit].age = this.age
      this.clients[this.onEdit].food = this.food

      this.onEdit = -1
    }

    this.age = NaN
    this.name = ''
    this.food = ''
  }

  edit(n: number): void {
    this.onEdit = n

    this.name = this.clients[n].name
    this.age = this.clients[n].age
    this.food = this.clients[n].food
  }

  delete(n: number): void {
    this.clients.splice(n, 1)
  }
  
}
