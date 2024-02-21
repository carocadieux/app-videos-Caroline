import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesVideosComponent } from './categories-videos.component';

describe('CategoriesVideosComponent', () => {
  let component: CategoriesVideosComponent;
  let fixture: ComponentFixture<CategoriesVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesVideosComponent]
    });
    fixture = TestBed.createComponent(CategoriesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
