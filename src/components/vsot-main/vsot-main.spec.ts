import { flush, render } from '@stencil/core/testing';
import { VsotMain } from './vsot-main';

describe('vsot-main', () => {
  it('should build', () => {
    expect(new VsotMain()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [VsotMain],
        html: '<vsot-main></vsot-main>'
      });
    });

    xit('should work without parameters', () => {
      expect(element.textContent).toEqual('Hello, my name is  ');
    });

    xit('should work a first name', async () => {
      element.first = 'Peter';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter ');
    });

    xit('should work with a last name', async () => {
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is  Parker');
    });

    xit('should work with both a first and a list name', async () => {
      element.first = 'Peter'
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});