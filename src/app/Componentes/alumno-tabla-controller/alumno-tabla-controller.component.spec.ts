import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTablaControllerComponent } from './alumno-tabla-controller.component';

describe('AlumnoTablaControllerComponent', () => {
  let component: AlumnoTablaControllerComponent;
  let fixture: ComponentFixture<AlumnoTablaControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoTablaControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoTablaControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
