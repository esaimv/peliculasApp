import { PeliculasAppPage } from './app.po';

describe('peliculas-app App', () => {
  let page: PeliculasAppPage;

  beforeEach(() => {
    page = new PeliculasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
