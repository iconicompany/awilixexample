import awilix from 'awilix';
// import TestLogic from './core/TestLogic';

export default class Application {
  constructor() {
    this.container = awilix.createContainer();
    const opts = {
      formatName: 'camelCase',
      esModules: true
    };
    this.container.loadModules(['src/core/**/*.js'], opts);
    // this.container.register('testLogic', awilix.asClass(TestLogic));
  }
}
