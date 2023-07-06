import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskDemoComponent } from './metamask-demo.component';

describe('MetamaskDemoComponent', () => {
  let component: MetamaskDemoComponent;
  let fixture: ComponentFixture<MetamaskDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamaskDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetamaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
