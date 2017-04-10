import { CoursePage } from './app.po';

describe('course App', function() {
  let page: CoursePage;

  beforeEach(() => {
    page = new CoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
