import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEchosComponent } from './hello-echos.component';

describe('HelloEchosComponent', () => {
  let component: HelloEchosComponent;
  let fixture: ComponentFixture<HelloEchosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloEchosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloEchosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
