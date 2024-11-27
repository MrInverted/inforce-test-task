interface IProduct {
  id: string;
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
  id: string;
  productId: string;
  description: string;
  date: string;
}
