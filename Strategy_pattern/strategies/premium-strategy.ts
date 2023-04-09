import { Strategy } from "../helpers/strategy";

export class PremiumStrategy implements Strategy {
  buyABook(bookPrice: number): number {
    return bookPrice * 0.8;
  }
}
