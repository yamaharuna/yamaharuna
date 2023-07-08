let currentScreen = 1;
//let insultText = "不遇之誉";
let maxInsultText = 50;
//let insultSize = 16;
//let insultColors = ["#000000", "#808080"]; // 黒とグレーのカラーコード
//let insults = [];
let encouragementText = "勇往邁進";
let encouragementCount = 0;
let maxEncouragementCount = 10;
let timer = 0;
let interval = 1000; // 1秒ごとにテキストを表示する間隔（ミリ秒）
let encouragementSize = 16;
let rotatingTextAngle = 0;



let targetX; // テキストの目標X座標
let targetY; // テキストの目標Y座標

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
  
  textAlign(CENTER, CENTER);
  textSize(encouragementSize);

  targetX = width*0.3; // 目標X座標を画面の中心に設定
  targetY = height / 2; // 目標Y座標を画面の中心に設定
}

function draw() {
  background(255);

  if (currentScreen === 1) {
    drawScreen1();
  } else if (currentScreen === 2) {
    drawScreen2();
  } else if (currentScreen === 3) {
    drawScreen3();
  }
  else if (currentScreen === 4) {
    drawScreen4();
  }
  else if (currentScreen === 5) {
    drawScreen5();
  }
}

function drawScreen1() {
  
  
  textAlign(LEFT, CENTER);
  textSize(16);
  
  
  
  text("嚆矢濫觴", width*0.3, height / 2);
  textAlign(LEFT, CENTER);
  textSize(16);
  //fill(0);
 

  //text("放たれた嚆矢の如く", width * 0.6, height / 2 - 100);
  //text("氾濫の海の真ん中で", width * 0.6, height / 2 - 50);
  //text("觴に注がれていく始まりは", width * 0.6, height / 2);
  text("波のリズムに翳りながら", width * 0.6, height / 2 + 50);

  if (mouseX > width*0.6 ) {
    fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
  } else {
    fill(0); // ホバーしていない時のテキストの色（黒）を設定
  }
  text("嚆矢", width * 0.6+63, height / 2 - 100);
  text("濫", width * 0.6+15, height / 2 - 50);
  text("觴", width * 0.6, height / 2 );


  fill(0)
  text("放たれた　　の如く", width * 0.6, height / 2 - 100);
  text("氾   の海の真ん中で", width * 0.6, height / 2 - 50);
  text("   に注がれていく始まりは", width * 0.6, height / 2);

}

function drawScreen2() {

  text("一歩、一歩進んでゆく姿", width * 0.6, height / 2 - 100);
  text("困難な道でもめげずに進む", width * 0.6, height / 2 - 50);
  text("勇者の鼓動が響き渡って", width * 0.6, height / 2);
  text("未知の地平へと駆け抜ける", width * 0.6, height / 2 + 50);

  if (encouragementCount < maxEncouragementCount) {
    if (millis() - timer >= interval) {
      encouragementCount++;
      timer = millis();
    }
  }

  for (let i = 1; i <= encouragementCount; i++) {
    let y = height * (i / (maxEncouragementCount + 1));
    text(encouragementText, width*0.3, y);
  }

  /*if (encouragementCount >= maxEncouragementCount && insults.length < maxInsultText) {
  createInsults();
  }

  for (let i = 0; i < insults.length; i++) {
    let insult = insults[i];

    textSize(insultSize);
    fill(insult.color);
    text(insult.text, insult.x, insult.y);

    // テキストの位置をアニメーションさせる
    insult.x = lerp(insult.x, targetX, 0.1);
    insult.y = lerp(insult.y, targetY, 0.1);
  }*/
}

function drawScreen3() {

  text("波が押し寄せる", width * 0.6, height / 2 - 100);
  text("目指す光が遠く見えない時も", width * 0.6, height / 2 - 50);
  text("一歩、一歩進んでゆく姿", width * 0.6, height / 2);
  text("時には退きながら", width * 0.6, height / 2 + 50);
  rotatingTextAngle += 0.1;

  for (let i = 0; i < 50; i++) {
    const x = width*0.3 + cos(rotatingTextAngle + i * 0.2) * 100;
    const y = height / 2 + sin(rotatingTextAngle + i * 0.2) * 100;
    text("一進一退", x, y);
  }}
  
  function drawScreen4() {
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(0);
   
  
    text("温かな光が心に灯り", width * 0.6, height / 2 - 100);
    text("希望の花が咲き誇る", width * 0.6, height / 2 - 50);
    text("力強く支え合う姿が", width * 0.6, height / 2);
    text("世界に新たな調べを奏でる", width * 0.6, height / 2 + 50);
  
    
   
    let y = height * 0.3; // 初期のy座標
  
    // テキストを5回描画
    for (let i = 0; i < 9; i++) {
      text("戮力協心戮力協心戮力協心戮力協心戮力協心", width*0.1, y);
      y += (height * 0.3 - height * 0.1) / 4; // 行間を計算
    }




    for (let i = 0; i < 7; i++) {
      let x = width * 0.1 + i * 50; // テキストの横位置を計算する
      let y = height * 0.3; // テキストの縦位置
      
      push(); // 現在の描画状態を保存
      translate(x, y); // テキストの描画位置を移動
      rotate(radians(90)); // テキストを90度回転させる
      
      text("戮力協心戮力協心戮力協心戮力協心戮力協心", 0, 0); // 回転させたテキストを表示
      
      pop(); // 保存した描画状態に戻す
    }
    
    
  }
  function drawScreen5() {
  
    text("報恩謝徳", width*0.3, height / 2);
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(0);
   
  
    text("受けた恩に応える手", width * 0.6, height / 2 - 100);
    text("報いる決意を胸に", width * 0.6, height / 2 - 50);
    text("感謝が導く道を進む", width * 0.6, height / 2);
    text("築かれた美徳をはなさずに", width * 0.6, height / 2 + 50);
  }
  
 
  

function mouseClicked() {
  if (currentScreen === 1) {
    currentScreen = 2;
  } else if (currentScreen === 2 && encouragementCount < maxEncouragementCount) {
    createInsults();
  } else if(currentScreen === 2 ){
  currentScreen=3;
  //else if (currentScreen === 2 && insults.length == maxInsultText) {
    //currentScreen = 3;
  } else if (currentScreen === 3) {
    currentScreen = 4;
  } else if (currentScreen === 4) {
    currentScreen = 5;
  } 
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  targetX = width / 2; // ウィンドウのリサイズ時に目標X座標を再設定
  targetY = height / 2; // ウィンドウのリサイズ時に目標Y座標を再設定
}

function createInsults() {
  if (insults.length < maxInsultText) {
    let insultColor = color(random(insultColors));
    let insultX = random(width);
    let insultY = random(height);

    insults.push({
      text: insultText,
      color: insultColor,
      x: insultX,
      y: insultY
    });
  }
}

