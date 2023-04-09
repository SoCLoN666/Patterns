export abstract class Book {
  public createBook() {
    this.drawCover();
    this.paintIllustrations();
    this.editText();
    this.printText();
    this.sewBook();
  }

  protected drawCover() {}
  protected paintIllustrations() {}
  protected editText() {}
  protected printText() {}
  protected sewBook() {}
}
