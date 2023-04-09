import { Book } from "../template/BookTemplate";

export class HarryPotterBook extends Book {
  protected drawCover() {
    console.log("drawing Harry Potter cover!");
  }
  protected paintIllustrations() {
    console.log("no illustration needed!");
  }

  protected editText() {
    console.log("Harry Potter text edited!");
  }
  protected printText() {
    console.log("Harry Potter text printed!");
  }

  protected sewBook() {
    console.log("Harry Potter book is sewed!");
  }
}
