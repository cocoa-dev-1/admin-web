import { NextComponentType } from "next";
import Image from "next/image";
import { FunctionComponent } from "react";

export type ItemCategory = "컴퓨터" | "가전" | "가구";

export interface ItemType {
  name: string;
  description: string;
  category: ItemCategory;
  price: number;
}

interface ItemProp {
  data: ItemType;
}

const Item: FunctionComponent<ItemProp> = ({ data }) => {
  return (
    <div className="flex flex-col w-50 h-60 bg-blue-100 rounded-md p-5">
      <Image
        src={`/vercel.svg`}
        alt={"에러"}
        width={"40"}
        height={"50"}
      ></Image>
      <span>이름: {data.name}</span>
      <span>설명: {data.description}</span>
      <span>카테고리: {data.category}</span>
      <span>가격: {data.price}</span>
    </div>
  );
};

export default Item;
