import { Strategy } from "../helpers/strategy";

export class BaseStrategy implements Strategy {
  buyABook(bookPrice: number): number {
    return bookPrice;
  }
}
