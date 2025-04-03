import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubuttonComponent } from './meubutton.component';

describe('MeubuttonComponent', () => {
  let component: MeubuttonComponent;
  let fixture: ComponentFixture<MeubuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeubuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeubuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
