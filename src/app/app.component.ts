import { Component } from '@angular/core';
import { IHobbiesSelect } from './Interface';
import { IHobbiesCheck } from './Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-Property-Demo';

  hobbiesSelect: IHobbiesSelect[] = [];
  hobbiesCheck: IHobbiesCheck[] = [];

  hobbySelectedForObject: IHobbiesSelect = {id: 0, name: "Cricket"};
  // hobbyCheckedForObject: IHobbiesCheck = {id: 0,name: "Cricket", isChecked: false};

  selectedGender="Female";
  selectedValue="Cricket";
  selectedIndex=0;

  hobbiesArray = [];
  tempArray = [];

  ngOnInit() {

    this.hobbiesArray = ['Cricket', 'Singing', 'Travelling', 'Cooking', 'Writing'];

    this.hobbiesSelect = this.hobbiesArray.map((value, index) => {
      return {id: index, name: value};
    }); 

    this.hobbiesCheck = this.hobbiesArray.map((value, index) => {
      return {id: index, name: value, isChecked: false};
    })
  }

  getRadioValue(event) {
    this.selectedGender = event.target.value;
    console.log(event);
  }

  getSelectedValue(event) {
    this.selectedValue = event.target.value;
    this.selectedIndex = event.target.selectedIndex;
  }

  getSelectedValueObj(event) {
    let id = event.target.selectedIndex;
    let value = event.target.value;
    this.hobbySelectedForObject = {id: id, name: value}
    console.log(this.hobbySelectedForObject);
  }

  getCheckedValue(event) {
    let index = this.tempArray.indexOf(event.target.value);
    if(index == -1) {
      this.tempArray.push(event.target.value);
    } else {
      this.tempArray.splice(index,1);
    }
    console.log(this.tempArray);
  }

  getCheckedValueObj(event, obj:IHobbiesCheck) {
    obj.isChecked = !obj.isChecked;
  }
}
