import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-footer',
  template: `
    <div class="col-xs-6">
      <label class="i-checks" style="padding-left: 20px">
        <input type="checkbox"
          (change)="todoService.getCntCompletedTodos($event.target.checked)">
          <i></i><span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button class="btn btn-default btn-xs"
        (click)="todoService.removeCompletedTodos()">
        Clear completed (<span>{{todoService.getCntCompletedTodos()}}</span>)
      </button>
      <strong>{{todoService.getCntActiveTodos()}}</strong>
        {{ todoService.getCntActiveTodos() > 1 ? 'items' : 'item' }} left
    </div>
  `
})
export class TodoFooterComponent {
  constructor(public todoService: TodoService) { }

  // @Input() cntCompletedTodos: number;
  // @Input() cntActiveTodos: number;
  // @Output() changeStatusToggleAllTodo = new EventEmitter();
  // @Output() removeCompletedTodos = new EventEmitter();
}
