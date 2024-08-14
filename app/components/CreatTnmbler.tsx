"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CreatTnmbler = () => {
  // タスクの完了状態を管理するステート
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);

  // Step 1のトグルハンドラー
  const handleStep1Complete = () => {
    setStep1Complete((prev) => !prev);
  };

  // Step 2のトグルハンドラー
  const handleStep2Complete = () => {
    setStep2Complete((prev) => !prev);
  };

  return (
    <div>
      <div className="sticky top-0 p-4 bg-white">
        <h1 className="texe-xl font-bold">タンブラー作り</h1>
        <p className="mb-2">
          自分だけのタンブラーを作ろう！
          <br />
          順序通りに作るとうまくできるよ！自分だけのオリジナルタンブラーを作ってみよう！
        </p>

        <ul className="steps w-full">
          <li className={"step step-accent"}>step1</li>
          <li className={`step ${step1Complete ? "step-accent" : ""}`}>
            step2
          </li>
          <li
            className={`step ${
              step1Complete && step2Complete ? "step-accent" : ""
            }`}
          >
            完成
          </li>
        </ul>
      </div>
      {step1Complete && step2Complete ? (
        <div className="m-10">
          <h1 className="text-xl font-bold">完成しました！</h1>
          <p>おめでとうございます！</p>
          <Image
            className="rounded-t-lg mx-auto"
            width={300}
            height={300}
            src="/omedeto.png"
            alt="Shoes"
          />
          <Link href="/experience" className="btn btn-accent text-white">
            バリスタ体験へ
          </Link>
        </div>
      ) : (
        <main className="flex flex-col">
          <div className="card card-compact bg-base-100 w-3/5 shadow-xl mx-auto m-10">
            <figure>
              <Image
                className="rounded-t-lg"
                width={300}
                height={300}
                src="/gara.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Step1:　好きな柄をえらぼう</h2>
              <p>
                好きなスターバックスのコーヒー豆のパッケージのデザインを決めよう！
              </p>
              <div className="card-actions justify-center">
                <button
                  className={`btn text-white ${
                    step1Complete ? "btn-gray-700" : "btn-accent"
                  }`}
                  onClick={handleStep1Complete}
                >
                  {step1Complete ? "完了済み" : "完了にする"}
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-3/5 shadow-xl mx-auto">
            <figure>
              <Image
                className="rounded-t-lg"
                width={300}
                height={300}
                src="/tumbler.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Step2:　タンブラーをデザインしよう</h2>
              <p>
                スターバックスのコーヒー豆のパッケージのデザインもとに自分だけのタンブラーを作ろう
              </p>
              <div className="card-actions justify-center">
                <button
                  className={`btn text-white ${
                    step2Complete ? "btn-gray-700" : "btn-accent"
                  }`}
                  onClick={handleStep2Complete}
                  disabled={!step1Complete}
                >
                  {step2Complete ? "完了済み" : "完了にする"}
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default CreatTnmbler;
