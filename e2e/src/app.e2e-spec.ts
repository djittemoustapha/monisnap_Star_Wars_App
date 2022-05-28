import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('providers App', () => {
  let page: AppPage;
  const buttons = element.all(by.css('button'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Lazy loading feature modules');
  });
});


