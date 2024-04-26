import React, { useState, useEffect } from 'react';
import ArmyGame from './Board';
import './main.css';


function App() {
  const [gameKey, setGameKey] = useState(0); // Used to reset the game by remounting the ArmyGame component
  const [showDescription, setShowDescription] = useState(false); // Controls the visibility of the game description

  const restartGame = () => {
    setGameKey(prevKey => prevKey + 1); // Incrementing key to remount the component
  };

  const toggleDescription = () => {
    setShowDescription(prevShow => !prevShow);
  };

  const closeDescription = () => {
    setShowDescription(false);
  };

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="app">
      <div className="left-panel"></div>
      <h1>Military Chess game</h1>
      <button onClick={restartGame}>New game</button>
      <button onClick={toggleDescription}>Rules</button>
      {showDescription && (
        <div id="desc">
          <h3>Rules</h3>
          <p>此陆战军旗为翻翻AI版，由玩家与电脑对战。游戏一开始所有棋子随机摆放不可见，双方玩家轮流走一步，可掀开任意一颗棋子，也可以让自己的棋子行走。</p>
          <h3>棋子大小</h3>
          <p>地雷小于工兵；</p>
          <p>司令  军长  师长  旅长  团长  营长  连长  排长  工兵</p>
          <p>炸弹与任何棋子相遇时，双方都消失。</p>
          <h3>开局</h3>
          <p>第一个玩家翻开的棋子颜色就是第一个玩家的角色，另一种颜色则是堆放的角色</p>
          <h3>胜负</h3>
          <p>对方三颗地雷都被工兵挖尽时可用己方任意一颗棋子抢军旗，抢到军旗者胜</p>
          <p>对方棋子被杀尽或者只剩地雷和军旗时胜利</p>
          <button onClick={closeDescription}>close</button>
        </div>
        
        
      )}
      <ArmyGame key={gameKey} />
    </div>
    
  );
}

export default App;
