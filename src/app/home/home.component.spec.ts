import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// what comp is put under test
import { HomeComponent } from './home.component';

// group of related test cases -- test spec
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
