import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students = [{'id': 1, 'name': 'Chris', 'age': 21},
                     {'id': 2, 'name': 'Denzel', 'age': 22},
                     {'id': 3, 'name': 'David', 'age': 22},
                     {'id': 4, 'name': 'Danielle', 'age': 22},
                     {'id': 5, 'name': 'Anne', 'age': 21},
                     {'id': 6, 'name': 'Josh', 'age': 22},
                     {'id': 7, 'name': 'Anca', 'age': 23}
                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
