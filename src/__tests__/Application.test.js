import Application from '../Application';

const app = new Application();
beforeAll(async () => {
  const res = await app.init();
  return res;
});

test('count registrations', () => {
  expect(Object.keys(app.container.registrations).length).toStrictEqual(1);
});
test('resolve testLogic', () => {
  expect(app.container.resolve('testLogic').constructor.name).toStrictEqual('TestLogic');
});
