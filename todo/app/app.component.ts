import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


interface Todo {
  id: number;
  content: string;
  completed: boolean;

}
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
 <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <input 
           class="form-control input-lg" 
           placeholder="What needs to be done?" 
           autofocus
           [(ngModel)] = "content"
           (keyup.enter)="addTodo()">
        <ul class="nav nav-xs nav-pills">
          <li *ngFor="let item of items"
            (click)="setSelectedNavStatus(item)"
            [class.active]="this.navStatus===item" ><a>{{item}}</a></li>


          <!--li id="all" (click)="tap('All')"  class="active" [class.active]="this.status===status">
            <a>All</a>
          </li>
          <li id="active" (click)="tap('Active')" [class.active]="this.status===status">
            <a>Active</a>
          </li>
          <li-- id="completed" (click)="tap('Completed')" [class.active]="this.status===status">
            <a>Completed</a>
          </li-->
        </ul>
        <ul id="todo-list" class="list-group" >
          <li *ngFor="let todo of todos | tapTodo: navStatus ; let i = index " class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" data-id={{i}} (click)="removeTodo(todo.id)"></span>
              </a>
              <label class="i-checks" for="{{i}}"  (click)="toggleTodo(todo)">
                <input type="checkbox" id="{{i}}" [checked]="todo.completed"><i></i>
                <span>{{todo.content}}</span>
              </label>
            </div>
          </li>
        </ul>
        <div class="col-xs-6">
          <label class="i-checks" style="padding-left: 20px">
            <input id="chk-allComplete" type="checkbox"  (click) = "checkAll($event.target.checked)">
            <i></i>
            <span>Mark all as complete</span>
          </label>
        </div>
        <div class="col-xs-6 text-right">
          <button id="btn-removeCompletedTodos" class="btn btn-default btn-xs" (click)="completedClear(todos)">Clear completed (
            <span id="completedTodos">{{countCompleted()}}</span>)</button>
          <strong id="leftTodos"></strong> items left {{countLeft()}}
        </div>
      </div>
    </div>
  </div>
  <pre> {{todos | json }}</pre>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;
  navStatus: string;
  items: string[];

  setSelectedNavStatus(status) {
    this.navStatus = status;
  }

  ngOnInit() {
    this.items = ['All', 'Active', 'Completed'];
    this.navStatus = this.items[0];
    this.todos = this.getTodos();
  }

  countCompleted () {
    return this.todos.filter(todo => todo.completed).length;
  }

  countLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  completedClear(todos) {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  getTodos() {
    return [
      { id: 1, content: 'HTML', completed: true},
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ];
  }

  newId() {
    return this.todos ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  addTodo() {
    this.todos.push({ id: this.newId(), content: this.content, completed: false });
    this.content = '';
    this.getTodos()
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(todo){
    todo.completed = !todo.completed;
  }

  checkAll(completed) {
    this.todos = this.todos.map(({id, content})=>({id, content, completed}))
    };
    
  }

