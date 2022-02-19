// 共通のインターフェースを定義する。

export type Blog = {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  body: string;
  categories: CategoryProps[];
};

export type CategoryProps = {
  id: string;
  name: string;
  image: CategoryImage;
};

export type CategoryImage = {
  url: string;
  height: string;
  width: string;
};

export type TagProps = CategoryProps & { bgColor: string };
