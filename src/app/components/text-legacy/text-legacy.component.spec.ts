import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLegacyComponent } from './text-legacy.component';

describe('TextLegacyComponent', () => {
  let component: TextLegacyComponent;
  let fixture: ComponentFixture<TextLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLegacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
