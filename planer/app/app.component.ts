import { Component, OnInit } from '@angular/core';

interface sList {
  id: number;
  subject: string;
  goal: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  checked: boolean;
  isShow = true;
  name = '';
  sLists: sList[] 


  ngOnInit() {
    this.sLists = [
      { id: 1, subject: 'computer', goal: 'angular component', dueDate: '2017-11-11', completed: false },
      { id: 2, subject: 'math', goal: 'function', dueDate: '2017-11-11', completed: false },
      { id: 3, subject: 'english', goal: 'verb', dueDate: '2017-11-11', completed: false }
    ];
  }
  
  
  //submit 버튼클릭시 내용추가
  addItem(subject: string, goal: string, dueDate: string ) {
    if (subject !=='' && goal !=='' && dueDate!==''){
    this.sLists.push({ id:this.getId() , subject: subject, goal: goal, dueDate:dueDate, completed: false })}
    else{alert("입력이 완료되지 않았습니다")};
    this.name = null;
    console.log(this.sLists)
  }
  
  //체크버튼과 컴플리트 전환
  
  checkToggle(id){
      this.sLists = this.sLists.map(function (sList) {
        return sList.id == id ? Object.assign({}, sList, { completed: !sList.completed }) : sList;
      });
      
    console.log(this.sLists);

  }

  //남은 목표 표시하기
  remainItem (): number {return this.sLists.filter(sList => sList.completed == false).length}
  
  //x버튼 클릭시 내용삭제
  removeItem(userid: number){
    this.sLists = this.sLists.filter(({ id }) => id !== userid);
  }
  getId(): number {
    return this.sLists.length ? Math.max(...this.sLists.map(({ id }) => id)) + 1 : 1;
  }

  //드롭다운으로 필터링 (All / remain / finished)
  filterItem(){}

  clearItem (){
    this.sLists = []
  }

  allFilter() {
  }

  fnishFilter(){
  }
  remainFilter() {
  }
  test(){
    alert("ddd")
  }

}
