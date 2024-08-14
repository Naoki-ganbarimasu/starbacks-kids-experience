"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

const CoffeeBeans: React.FC = () => {
  useEffect(() => {
    // SpeakerDeckのスクリプトを手動でロード
    const script = document.createElement('script');
    script.src = "//speakerdeck.com/assets/embed.js";
    script.async = true;
    script.className = "speakerdeck-embed";
    script.setAttribute('data-id', '9f9f4ea354374ec4a2b516f7df4c4eeb');
    script.setAttribute('data-ratio', '1.7777777777777777');
    
    const container = document.querySelector('.speakerdeck-embed-container');
    if (container) {
      container.appendChild(script);
    }
  }, []); // 空の依存配列でuseEffectが一度だけ実行される

  return (

    <div className='m-10'>
      {/* SpeakerDeck埋め込みスクリプトを配置 */}
      <div className="speakerdeck-embed-container"></div>
      <Link href={"/create-tunber"} className="btn btn-accent text-white">タンブラー作りへ</Link>
    </div>
  );
};

export default CoffeeBeans;