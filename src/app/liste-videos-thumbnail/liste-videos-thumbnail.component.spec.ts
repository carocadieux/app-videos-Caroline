import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVideosThumbnailComponent } from './liste-videos-thumbnail.component';

describe('ListeVideosThumbnailComponent', () => {
  let component: ListeVideosThumbnailComponent;
  let fixture: ComponentFixture<ListeVideosThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVideosThumbnailComponent]
    });
    fixture = TestBed.createComponent(ListeVideosThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
