import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitsPageComponent } from './units.component';

describe('UnitsPageComponent', () => {
  let component: UnitsPageComponent;
  let fixture: ComponentFixture<UnitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Units');
  });
});
