import React from 'react'
import CoffeeBeans from '../components/CoffeeBeans';

const Coffee = () => {
  return (
    <div>
        <h1　className='text-xl font-bold mx-5'>コーヒー豆ができるまで</h1>
        <p className='mx-5'>kidsバリスタ体験会ということで、バリスタになるからにはコーヒー豆について少しでも知識を深めておきましょう。親御様この機会に少しでもコーヒーに詳しくなっていただければと思います。           <br/>
            今回はコーヒー豆ができるまでの過程を説明します。
        </p>
          <CoffeeBeans/>
    </div>
  )
}

export default Coffee;
