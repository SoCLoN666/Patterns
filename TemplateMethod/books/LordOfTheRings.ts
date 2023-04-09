import { Book } from "../template/BookTemplate";

export class LordOfRingBook extends Book {
  protected drawCover() {
    console.log("Lord of Rings cover is drawn!");
  }
  protected paintIllustrations() {
    console.log("Lord of Rings paintings are done!");
  }
  protected editText() {
    console.log("Lord of Rings text is edited!");
  }
  protected printText() {
    console.log("Lord of Rings text is printed!");
  }
  protected sewBook() {
    console.log("Lord of Rings book is sewed!");
  }
}
