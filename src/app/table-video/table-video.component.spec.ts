import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVideoComponent } from './table-video.component';

describe('TableVideoComponent', () => {
  let component: TableVideoComponent;
  let fixture: ComponentFixture<TableVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableVideoComponent]
    });
    fixture = TestBed.createComponent(TableVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
