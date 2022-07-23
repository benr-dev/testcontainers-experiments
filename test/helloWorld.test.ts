import { helloWorld } from '../src/helloWorld';

test('hello world tests', () => {
    expect(helloWorld()).toBe('Hello World');
})