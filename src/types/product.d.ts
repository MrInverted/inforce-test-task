interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  weight: number;
  size: Size;
  comments: IComment[];
}

interface Size {
  width: number;
  height: number;
}

interface IComment {
  id: number;
  productId: number;
  description: string;
  date: string;
}
