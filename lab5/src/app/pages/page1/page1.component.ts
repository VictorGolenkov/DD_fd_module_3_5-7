import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService, Student } from 'src/app/core/services/data.service';

export class User {
  constructor(public name: string, public age: number, public surname: string) {

  }
}
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  users: User[] = [];
  students: Student[] = [];

  name = '';
  surname = '';
  age = 0;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    const path = 'assets/data.json';
    this.dataService.getStudents(path)
      .pipe(
        filter(data => data != null),
        map((data => (data.map(student => ({ ...student, group: student.group + ' 1 курс' })))))
      )
      .subscribe((students) => {
        this.students = students;
      })

  }

  loadStudents(path: string) {
    this.dataService.getStudents(path).subscribe(students => {
      this.students = students;
    });
  }

  onLoadOtherData() {
    const newPath = 'assets/wrong-data.json';
    this.loadStudents(newPath);
  }
}
