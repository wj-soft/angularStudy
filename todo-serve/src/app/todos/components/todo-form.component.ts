import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-form',
  template: `
    <input class="form-control input-lg"
      placeholder="What needs to be done?"
      autofocus
      [(ngModel)]="content"
      (keyup.enter)="onEnter()">
  `
})
export class TodoFormComponent {

  content: string;
  // @Output() addTodo = new EventEmitter();
  constructor(public todoService: TodoService) { }
  onEnter() {
    if (this.content) {
      this.todoService.addTodo(this.content);
      this.content = '';
    }
  }
}
