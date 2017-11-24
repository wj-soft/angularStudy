import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Todo } from './models/todo';


@Injectable()
export class TodoService {
  todos: Todo[];
  appUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) {
    this.getTodos();
  }

  ngOnInit() {
    console.log('[appUrl]', this.appUrl);
    this.getTodos();
  }

  getTodos() {
    this.http.get<Todo[]>(this.appUrl)
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: string) {
    const newTodo = { id: this.lastTodoId(), content, completed: false }
    this.http.post(this.appUrl, newTodo)
      .subscribe(() => this.todos = [newTodo, ...this.todos]);
  }

  removeTodo(id: number) {
    console.log(this.appUrl)
    console.log(id)
    this.http.delete(`${this.appUrl}/id/${id}`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
  }

  removeCompletedTodos() {
    this.http.delete(`${this.appUrl}/completed`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed));
  }

  toggleComplete(id: number) {
    const { completed } = this.todos.find(todo => todo.id === id);
    const payload = { completed: !completed };

    this.http.patch(`${this.appUrl}/id/${id}`, payload, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return todo.id === id ? Object.assign(todo, { completed: !completed }) : todo;
      }));
  }


  toggleAllTodoAsComplete(completed: boolean) {
    this.http.patch(`${this.appUrl}`, { completed }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return Object.assign(todo, { completed });
      }));
  }
  getCntCompletedTodos(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  getCntActiveTodos(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  lastTodoId(): number {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

}
