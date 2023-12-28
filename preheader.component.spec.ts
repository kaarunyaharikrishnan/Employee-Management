import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreheaderComponent } from './preheader.component';

describe('PreheaderComponent', () => {
  let component: PreheaderComponent;
  let fixture: ComponentFixture<PreheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
