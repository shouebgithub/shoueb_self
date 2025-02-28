import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostuffComponent } from './demostuff.component';

describe('DemostuffComponent', () => {
  let component: DemostuffComponent;
  let fixture: ComponentFixture<DemostuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemostuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemostuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
