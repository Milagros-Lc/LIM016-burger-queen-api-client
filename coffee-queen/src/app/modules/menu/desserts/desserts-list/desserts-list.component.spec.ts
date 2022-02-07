import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsListComponent } from './desserts-list.component';

describe('DessertsListComponent', () => {
  let component: DessertsListComponent;
  let fixture: ComponentFixture<DessertsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});