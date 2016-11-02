import { NoteKeepPage } from './app.po';

describe('note-keep App', function() {
  let page: NoteKeepPage;

  beforeEach(() => {
    page = new NoteKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
