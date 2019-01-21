import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCriadaComponent } from './tarefa-criada.component';

describe('TarefaCriadaComponent', () => {
  let component: TarefaCriadaComponent;
  let fixture: ComponentFixture<TarefaCriadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCriadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
