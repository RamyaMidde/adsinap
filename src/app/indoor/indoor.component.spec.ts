import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorComponent } from './indoor.component';

describe('IndoorComponent', () => {
  let component: IndoorComponent;
  let fixture: ComponentFixture<IndoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorComponent]
    });
    fixture = TestBed.createComponent(IndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
