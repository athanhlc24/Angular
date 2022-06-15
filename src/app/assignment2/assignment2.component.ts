import {Component} from "@angular/core";
import {Session2Interface} from "../interfaces/session2.interface";


@Component({
  selector:'app-assignment2',
  templateUrl:'./assignment2.component.html',
})
export class Assignment2Component{
  contents: Session2Interface[] = [
    {tieu_de: 'Task1', noi_dung:'Analyze',},
    {tieu_de: 'Task2', noi_dung:'Analyze123',},
    {tieu_de: 'Task3', noi_dung:'Analyze123123',},
    {tieu_de: 'Task4', noi_dung:'Analyze123123',}
  ]
}

