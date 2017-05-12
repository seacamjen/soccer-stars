import { SoccerStarsPage } from './app.po';

describe('soccer-stars App', () => {
  let page: SoccerStarsPage;

  beforeEach(() => {
    page = new SoccerStarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
