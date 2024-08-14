"use client"
import React from "react";
import CoffeeBeans from "./components/CoffeeBeans";
import Image from "next/image";
import Link from "next/link";

const Tabs = () => {
  return (
    <>
    <div className="card card-compact bg-base-100 w-3/5 shadow-xl mx-auto my-auto">
  <figure>
    <Image
      className="rounded-t-lg"
      width={200}
      height={200}
      src="/thank.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">ようこそミロードへ</h2>
    <p>今回はkidsバリスタパーティにご参加いただきありがとうございます。</p>
    <h2 className="text-xl">本日の流れ</h2>
    <p>1.コーヒー豆の説明</p>
    <p>2.タンブラー作り</p>
    <p>3.バリスタ体験</p>
    <p></p>
    <div className="card-actions justify-center">
      <Link href="/coffee" className="btn btn-accent text-white px-5">はじめる</Link>
    </div>
  </div>
</div>
  </>
  );
};

export default Tabs;
