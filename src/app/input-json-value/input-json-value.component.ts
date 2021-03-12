import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-json-value',
  templateUrl: './input-json-value.component.html',
  styleUrls: ['./input-json-value.component.css']
})
export class InputJsonValueComponent {
  inputData = new FormControl('');
  updateName() {
    
  }
}


