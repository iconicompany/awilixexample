import awilix from 'awilix';
// import TestLogic from './core/TestLogic';

export default class Application {
  constructor() {
    this.container = awilix.createContainer();
  }

  async init() {
    const opts = {
      formatName: 'camelCase',
      esModules: true
    };
    await this.container.loadModules(['src/core/**/*.js'], opts);
  }
}
