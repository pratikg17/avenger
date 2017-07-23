import { Foobar2Page } from './app.po';

describe('foobar2 App', () => {
  let page: Foobar2Page;

  beforeEach(() => {
    page = new Foobar2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
