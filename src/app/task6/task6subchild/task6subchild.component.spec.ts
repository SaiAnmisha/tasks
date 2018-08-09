import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6subchildComponent } from './task6subchild.component';

describe('Task6subchildComponent', () => {
  let component: Task6subchildComponent;
  let fixture: ComponentFixture<Task6subchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6subchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6subchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
