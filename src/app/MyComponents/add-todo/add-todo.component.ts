import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  data:boolean = false;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  addTodoForm = new FormGroup({
    title:new FormControl(),
    desc: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
    this.data = true;
    setTimeout(() => {
      this.data = false;
    }, 6000);
    this.addTodoForm.reset(); //to reset the form field
  }
}
