"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link'

const Barista = () => {

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
      <h1 className="texe-xl font-bold">バリスタ体験の準備</h1>
      <p className="mb-2">
        これからバリスタになるために準備をしていくよ！
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
        <h1 className="text-xl font-bold">準備完了！</h1>
        <p>バリスタになったきみならきっとうまくドリンクを作れるぞ！</p>
        <Image
          className="rounded-t-lg mx-auto"
          width={300}
          height={300}
          src="/barista.png"
          alt="Shoes"
        />
       
      </div>
    ) : (
      <main className="flex flex-col">
        <div className="card card-compact bg-base-100 w-3/5 shadow-xl mx-auto m-10">
          <figure>
            <Image
              className="rounded-t-lg"
              width={300}
              height={300}
              src="/epuron.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Step1:　エプロンに着替えよう</h2>
            <p>
              エプロンを着てバリスタになる準備をしよう！エプロンはバリスタの証！
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
              src="/tearai.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Step2:　手をあらおう</h2>
            <p>
              手を洗うと、うまくドリンクを作ることができるよ！
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
  )
}

export default Barista
