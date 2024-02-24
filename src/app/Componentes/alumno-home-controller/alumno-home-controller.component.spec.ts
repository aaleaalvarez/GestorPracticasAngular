import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHomeControllerComponent } from './alumno-home-controller.component';

describe('AlumnoHomeControllerComponent', () => {
  let component: AlumnoHomeControllerComponent;
  let fixture: ComponentFixture<AlumnoHomeControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoHomeControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoHomeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
