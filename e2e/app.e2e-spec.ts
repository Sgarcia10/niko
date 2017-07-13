import { NikoPage } from './app.po';

describe('niko App', () => {
  let page: NikoPage;

  beforeEach(() => {
    page = new NikoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
