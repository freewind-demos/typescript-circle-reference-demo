import * as core1 from './core1';

export function gotoCore1(): typeof core1 {
  console.log('---- gotoCore1 ----')
  return core1;
}
