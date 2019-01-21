import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCompletaComponent } from './tarefa-completa.component';

describe('TarefaCompletaComponent', () => {
  let component: TarefaCompletaComponent;
  let fixture: ComponentFixture<TarefaCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
