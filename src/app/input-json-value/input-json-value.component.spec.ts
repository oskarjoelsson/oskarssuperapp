import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJsonValueComponent } from './input-json-value.component';

describe('InputJsonValueComponent', () => {
  let component: InputJsonValueComponent;
  let fixture: ComponentFixture<InputJsonValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputJsonValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJsonValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
