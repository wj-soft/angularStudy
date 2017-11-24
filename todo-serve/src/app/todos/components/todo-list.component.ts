import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let todo of (todoService.todos | todoFilter: statusNav)">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right"
              (click)="todoService.removeTodo(todo.id)"></span>
          </a>
          <label class="i-checks" [for]="todo.id">
            <input type="checkbox" [id]="todo.id"
              (change)="todoService.toggleComplete(todo.id)"
              [checked]="todo.completed"><i></i>
            <span>{{todo.content}}</span>
          </label>
        </div>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  constructor(public todoService: TodoService) { }
  @Input() statusNav: string;
}
