import React from "react";
import Image from 'next/future/image';
import CartButton from "../CartButton/CartButton";
import { formatDollar } from "../../helper/format";
import Link from "next/link";
import CartTeaser from "../CartTeaser/CartTeaser";

interface IProductDetail {
  productId: string;
  title: string;
  price: number;
  description: string;
  thumb: string;
}

const ProductDetail = ({
  productId,
  title,
  price,
  description,
  thumb,
}: IProductDetail) => {
  return (
    <div className="product-detail mx-auto container py-5">
      <Link href="/product">
        <a>Back to list</a>
      </Link>
      <CartTeaser />
      <div className="flex flex-wrap">
        <div className="w-4/12">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${thumb}`}
            alt={`image ${title}`}
          />
        </div>
        <div className="w-8/12 pl-8">
          <h1 className="mb-4">{title}</h1>
          <div className="my-4">{formatDollar(price)}</div>
          <CartButton
            className={'btn'}
            productId={productId}
            title={title}
            price={price}
          >
            Add to cart
          </CartButton>
          <div className="my-4" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
