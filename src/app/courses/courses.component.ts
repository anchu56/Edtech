import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public courses=[
    {
      "cid":1,
      "cname":"Java",
      "ctrainer": "Purushotam",
      "cduration":"8 days"
     },
     {
      "cid":2,
      "cname":"Angular",
      "ctrainer": "Zaiba",
      "cduration":"4 days"
     },
     {
      "cid":3,
      "cname":"Spring",
      "ctrainer": "Basavaraj",
      "cduration":"5 days"
     },
     {
      "cid":4,
      "cname":"React",
      "ctrainer": "Veena",
      "cduration":"5 days "
     },
     {
      "cid":5,
      "cname":"Javascript",
      "ctrainer": "Manjula",
      "cduration":"3 days"
     },
     {
      "cid":6,
      "cname":"Nodejs",
      "ctrainer": "Pradeep",
      "cduration":"7 days"
     },
     {
      "cid":7,
      "cname":"NextJS",
      "ctrainer": "Sreekumar",
      "cduration":"6 days"
     },
     {
      "cid":8,
      "cname":"Tailwind CSS",
      "ctrainer": "Adithya",
      "cduration":"2 days"
     },
  ]
}
