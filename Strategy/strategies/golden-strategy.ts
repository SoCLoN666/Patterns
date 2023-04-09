import { Strategy } from "../helpers/strategy";

export class GoldenStrategy implements Strategy {
  buyABook(bookPrice: number): number {
    return bookPrice * 0.9;
  }
}
