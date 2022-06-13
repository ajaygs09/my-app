import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  rows: any []= [
    {
      FirstName: "test 3",
      LastName: "test ",
      DOB: "09-05-2000",
      PhoneNumber: "788787723",
      Email: "test@gmail.com"

    },
    {
      FirstName: "test 2",
      LastName: "test ",
      DOB: "09-05-2000",
      PhoneNumber: "788787723",
      Email: "test2@gmail.com"

    },
    {
      FirstName: "test 3",
      LastName: "test ",
      DOB: "09-05-2000",
      PhoneNumber: "788787723",
      Email: "test3@gmail.com"

    },
    {
      FirstName: "test 4",
      LastName: "test ",
      DOB: "09-05-2000",
      PhoneNumber: "788787723",
      Email: "test4@gmail.com"

    },
    {
      FirstName: "test 5",
      LastName: "test ",
      DOB: "09-05-2000",
      PhoneNumber: "788787723",
      Email: "test5@gmail.com"

    }
  ];

  testData:any =[
    {id:'1'},
    {id:'2'},
    {id:'3'},
    {id:'4'},
    {id:'5'},
    {id:'6'},
    {id:'1'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
