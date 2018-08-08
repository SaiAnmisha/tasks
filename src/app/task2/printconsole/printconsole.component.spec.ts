import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintconsoleComponent } from './printconsole.component';

describe('PrintconsoleComponent', () => {
  let component: PrintconsoleComponent;
  let fixture: ComponentFixture<PrintconsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintconsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
