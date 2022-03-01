import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownspeopleComponent } from './townspeople.component';

describe('TownspeopleComponent', () => {
  let component: TownspeopleComponent;
  let fixture: ComponentFixture<TownspeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownspeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TownspeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
