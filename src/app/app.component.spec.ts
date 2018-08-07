import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  it('should be truthy', () =>{
    let app=new AppComponent();
    expect(app).toBeTruthy();
  });
  it('should calculate',() =>{
    let app=new AppComponent();
    expect(app.total).toBe(3);
  })
  it('should calculate the total',() => {
    let app=new AppComponent();
    app.items=[
      {name:'item1',price:1},
      {name:'item2',price:4}
    ];
    app.calculate();
    expect(app.total).toEqual(5);
  });
});
