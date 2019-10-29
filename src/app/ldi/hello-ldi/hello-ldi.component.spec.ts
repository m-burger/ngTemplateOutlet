import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloLdiComponent } from './hello-ldi.component';

describe('HelloLdiComponent', () => {
  let component: HelloLdiComponent;
  let fixture: ComponentFixture<HelloLdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloLdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloLdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
