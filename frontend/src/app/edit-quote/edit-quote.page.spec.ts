import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditQuotePage } from './edit-quote.page';

describe('EditQuotePage', () => {
  let component: EditQuotePage;
  let fixture: ComponentFixture<EditQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
