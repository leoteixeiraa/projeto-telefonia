import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelComponenteComponent } from './tel-componente.component';

describe('TelComponenteComponent', () => {
  let component: TelComponenteComponent;
  let fixture: ComponentFixture<TelComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
