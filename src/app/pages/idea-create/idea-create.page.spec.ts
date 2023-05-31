import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeaCreatePage } from './idea-create.page';

describe('IdeaCreatePage', () => {
  let component: IdeaCreatePage;
  let fixture: ComponentFixture<IdeaCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdeaCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
