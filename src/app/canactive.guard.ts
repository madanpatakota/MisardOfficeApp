import { CanActivateFn } from '@angular/router';

export const canactiveGuard: CanActivateFn = (route, state) => {
  if(route.children){
    
  }
  return true;
};

 
