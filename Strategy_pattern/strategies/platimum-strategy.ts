import { Strategy } from "../helpers/strategy";

export class PlatinumStrategy implements Strategy {
  buyABook(bookPrice: number): number {
    return bookPrice * 0.7;
  }
}
