import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantmasterComponent } from './plantmaster.component';

describe('PlantmasterComponent', () => {
  let component: PlantmasterComponent;
  let fixture: ComponentFixture<PlantmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantmasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
