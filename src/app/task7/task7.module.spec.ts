import { Task7Module } from './task7.module';

describe('Task7Module', () => {
  let task7Module: Task7Module;

  beforeEach(() => {
    task7Module = new Task7Module();
  });

  it('should create an instance', () => {
    expect(task7Module).toBeTruthy();
  });
});
