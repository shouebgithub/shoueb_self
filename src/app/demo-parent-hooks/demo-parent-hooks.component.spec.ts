import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoParentHooksComponent } from './demo-parent-hooks.component';

describe('DemoParentHooksComponent', () => {
  let component: DemoParentHooksComponent;
  let fixture: ComponentFixture<DemoParentHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoParentHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoParentHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
