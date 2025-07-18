import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeploymentComponent } from './client-deployment.component';

describe('ClientDeploymentComponent', () => {
  let component: ClientDeploymentComponent;
  let fixture: ComponentFixture<ClientDeploymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDeploymentComponent]
    });
    fixture = TestBed.createComponent(ClientDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
