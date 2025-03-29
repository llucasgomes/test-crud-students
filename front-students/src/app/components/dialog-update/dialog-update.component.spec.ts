import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateComponent } from './dialog-update.component';

describe('DialogUpdateComponent', () => {
  let component: DialogUpdateComponent;
  let fixture: ComponentFixture<DialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
