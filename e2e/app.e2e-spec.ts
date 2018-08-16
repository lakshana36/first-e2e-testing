import { AppPage } from './app.po';
import {element, by, browser} from 'protractor';
describe('test1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  it('should have a title of app', () =>{
     browser.get('/');
     let title =element(by.tagName('h1')).getText();
     expect(title).toEqual('app');
  });
});
