/**
 * @jest-environment jsdom
 */
import * as firebaseAuth from '../src/lib/firebaseConfig';
import { loginWithTwitter } from '../src/lib/loginConfig';

jest.mock('firebase/auth', () => ({
  __esModule: true, //    <----- this __esModule: true is important
  ...jest.requireActual('firebase/auth'),
}));

describe('Probar login', () => {
  it('Probar login usando twitter', () => {
    jest.spyOn(firebaseAuth, 'loginWithTwitter').mockImplementation(() => Promise.resolve({ email: 'jakelin263taiga@gmail.com' }));
    expect(typeof loginWithTwitter()).toBe('function');
  });
  it('Tiene un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(loginWithTwitter());
    const haveAButton = DOM.querySelector('.buttontwitter');
    expect(haveAButton).not.toBe(undefined);
  });
});
