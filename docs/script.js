let currentScreen = 0;
let maxInsultText = 50;
let encouragementCount = 0;
let maxEncouragementCount = 10;
let timer = 0;
let interval = 1000; // 1秒ごとにテキストを表示する間隔（ミリ秒）
let encouragementSize = 40;
let rotatingTextAngle = 0;
let petalRotationAngle=0;
const numPetals = 12;
const petalSize = 100;
let targetX; // テキストの目標X座標
let targetY; // テキストの目標Y座標

let fadeAlpha = 0;
let fadeSpeed = 2;
let animationComplete = false;



function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
  
  textAlign(CENTER, CENTER);
  //textSize(encouragementSize);
  targetX = width*0.3; // 目標X座標を画面の中心に設定
  targetY = height / 2; // 目標Y座標を画面の中心に設定
  //initializeTexts();
}

function draw() {
  background(255);
  if (currentScreen === 0) {
    drawScreen0();
  }
  else if (currentScreen === 1) {
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
  else if (currentScreen === 6) {
    drawScreen6();
  }
}
function drawScreen0() {
  textAlign(CENTER, CENTER);
  textSize(20);
  text("四字で紡ぐ",width*0.5,height*0.5);
  textSize(15);
  text("山本晴菜",width*0.5,height*0.55);
}

let texts = [];
function drawScreen1(){
  for (let i = 0; i < texts.length; i++) {
    texts[i].display();
    texts[i].update();
    textSize(16);
    textAlign(LEFT, CENTER);
    if (mouseX > width*0.6&&mouseX<width*0.7  ) {
      fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
    } else {
      fill(0); // ホバーしていない時のテキストの色（黒）を設定
    }
    text("幻", width * 0.6, height / 2 - 100);
    text("影", width * 0.6+160, height / 2 - 50);
    text("夢", width * 0.6+80, height / 2 );
    text("泡", width * 0.6, height / 2 +50);
  　
  
    fill(0)
    text("　想の舞台で踊り", width * 0.6, height / 2 - 100);
    text("やがて消えゆく人々は　。", width * 0.6, height / 2 - 50);
    text("彼方に望む　の光も", width * 0.6, height / 2);
    text("　沫のように消えては現る。", width * 0.6, height / 2+50);
    text("夢幻泡影", width*0.3, height / 2);
  
  }
}
function mouseClicked() {
  for (let i = texts.length - 1; i >= 0; i--) {
    if (texts[i].contains(mouseX, mouseY)) {
      texts.splice(i, 1);
    }
  }
}
// 文字クラス
class Text {
  constructor(x, y, size, character) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.character = character;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.angle = random(0, 360); // 文字のランダムな角度
    this.alpha = 255;
  }

  // 文字を描画
  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    fill(0, this.alpha);
    textSize(this.size);
    text(this.character, 0, 0);
    pop();
  }

  // 文字の更新
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 1.5;
  }

  // マウス位置との当たり判定
  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    return (d <= this.size / 2);
  }
}

// 初期設定
function initializeTexts() {
  texts.push(new Text(random(width), random(height), random(20, 60), "夢"));
  texts.push(new Text(random(width), random(height), random(20, 60), "幻"));
  texts.push(new Text(random(width), random(height), random(20, 60), "泡"));
  texts.push(new Text(random(width), random(height), random(20, 60), "影"));
}



// クリック時の再設定
function mouseClicked() {
  initializeTexts();
}

function drawScreen2() {

  //text("心に住む夢の宿る場所へ", width * 0.6, height / 2 - 100);
  //text("一歩一歩邁く、未知への旅路", width * 0.6, height / 2 - 50);
  //text("勇者の鼓動を響き渡らせながら", width * 0.6, height / 2);
  //text("一歩一歩進む、わたしの旅路", width * 0.6, height / 2 + 50);

  if (mouseX > width*0.6&&mouseX<width*0.7 ) {
    fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
  } else {
    fill(0); // ホバーしていない時のテキストの色（黒）を設定
  }
  text("住", width * 0.6+30, height / 2 - 100);
  text("邁", width * 0.6+65, height / 2 - 50);
  text("勇", width * 0.6, height / 2 );
  text("進", width * 0.6+70, height / 2 +50);


  fill(0)
  text("心に   む夢の宿る場所へ", width * 0.6, height / 2 - 100);
  text("どんどん   く、未知への旅路。", width * 0.6, height / 2 - 50);
  text("   者の鼓動を響き渡らせながら", width * 0.6, height / 2);
  text("どんどん    む、わたしの旅路。", width * 0.6, height / 2+50);

  // 勇往邁進のアート
  let phrase = "勇往邁進";
  let fontSize = 100;
  let spacing = 80;
  let startX = (width*0.5 - (phrase.length - 1) * spacing) / 2;
  let startY = height / 2;

  for (let i = 0; i < phrase.length; i++) {
    let x = startX + i * spacing;
    let y = startY;
    let angle = map(sin(frameCount * 0.05 + i * 0.2), -1, 1, -PI / 4, PI / 4);
    
    push();
    translate(x, y);
    rotate(angle);
    fill(0);
    textSize(fontSize);
    text(phrase[i], 0, 0);
    pop();
  }
}

function drawScreen3() {

  text("波が押し寄せる。", width * 0.48, height*0.55 - 100);
  text("目指す光が遠く見えない時も", width * 0.46, height*0.55 - 50);
  //text("一歩、一歩進んでゆく姿", width * 0.6, height / 2);
  //text("時には退きながら", width * 0.6, height / 2 + 50);

  if (mouseX > width*0.4&&mouseX<width*0.6 ) {
    fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
  } else {
    fill(0); // ホバーしていない時のテキストの色（黒）を設定
  }
  
  text("一", width * 0.46, height*0.55);
  text("一", width * 0.46+40, height*0.55);
  text("進", width * 0.46+68, height*0.55 );
  text("退", width * 0.48+50, height*0.55 +50);


  fill(0)
  
  text("　歩、 歩　んでゆく姿。", width * 0.46, height*0.55);
  text("時には　 きながら", width * 0.48, height*0.55+50);


  rotatingTextAngle += 0.1;

  for (let i = 0; i < 50; i++) {
    const x = width*0.5 + cos(rotatingTextAngle + i * 0.2) * 150;
    const y = height*0.5 + sin(rotatingTextAngle + i * 0.2) * 150;
    text("一進一退", x, y);
  }}
  
  function drawScreen4() {
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(0);
   
  
    
    //text("和の音が響く。", width * 0.6, height / 2 - 100);
    //text("一つの音に　同じ響きはなく", width * 0.6, height / 2 - 50);
    //text("衷情を重ねて、", width * 0.6, height / 2);
    //text("協奏の調べを奏でる。", width * 0.6, height / 2 + 50);

    if (mouseX > width*0.6&&mouseX<width*0.7 ) {
      fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
    } else {
      fill(0); // ホバーしていない時のテキストの色（黒）を設定
    }
    text("和", width * 0.6, height / 2 - 100);
    text("同", width * 0.6+80, height / 2 - 50);
    text("衷", width * 0.6, height / 2 );
    text("協", width * 0.6, height / 2 +50);
  
  
    fill(0)
    text("   の音が響く。", width * 0.6, height / 2 - 100);
    text("一つの音に　じ響きはなく", width * 0.6, height / 2 - 50);
    text("   情を重ねて、", width * 0.6, height / 2);
    text("   奏の調べを奏でる。", width * 0.6, height / 2+50);
  
    
   
    let y = height * 0.3; // 初期のy座標
  
    // テキストを5回描画
    for (let i = 0; i < 9; i++) {
      
      text("和衷協同和衷協同和衷協同和衷協同和衷協同", width*0.2, y);
      y += (height * 0.3 - height * 0.1) / 4; // 行間を計算
    }




    for (let i = 0; i < 7; i++) {
      let x = width * 0.2 + i * 50; // テキストの横位置を計算する
      let y = height * 0.3; // テキストの縦位置
      
      push(); // 現在の描画状態を保存
      translate(x, y); // テキストの描画位置を移動
      rotate(radians(90)); // テキストを90度回転させる
      
      text("和衷協同和衷協同和衷協同和衷協同和衷協同", 0, 0); // 回転させたテキストを表示
      pop(); // 保存した描画状態に戻す
    }
    
    
  }
  function drawScreen5() {
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(0);
    
    //text("百人百色の", width * 0.6, height / 2 - 100);
    //text("淡い色の花びら。", width * 0.6, height / 2 - 50);
    //text("繚乱と舞う風の中で", width * 0.6, height / 2);
    //text("ほっと一息、木陰に身を寄せる。", width * 0.6, height / 2 + 50);
    if (mouseX > width*0.6&&mouseX<width*0.7 ) {
      fill(255, 0, 0); // ホバー時のテキストの色（赤）を設定
    } else {
      fill(0); // ホバーしていない時のテキストの色（黒）を設定
    }
    text("百", width * 0.6+30, height / 2 - 50);
    text("花", width * 0.6+80, height / 2 - 50);
    text("繚乱", width * 0.6, height / 2 );
    //text("進", width * 0.6+70, height / 2 +50);
  
  
    fill(0)
    text("今を盛りと咲きこぼれる", width * 0.6, height / 2 - 100);
    text("百人　色の　びらたち。", width * 0.6, height / 2 - 50);
    text("　　と舞う風の中で", width * 0.6, height / 2);
    text("たった一人の、君を見つけた。", width * 0.6, height / 2+50);

    rotatingTextAngle += 0.02;
  petalRotationAngle += 0.01;

  for (let i = 0; i < numPetals; i++) {
    const angle = TWO_PI / numPetals * i;
    const x = width * 0.3 + cos(petalRotationAngle + angle) * petalSize;
    const y = height * 0.5 + sin(petalRotationAngle + angle) * petalSize;
    const rotation = petalRotationAngle + angle;

    push();
    translate(x, y);
    rotate(rotation);
    textSize(20);
    text("百花繚乱", 0, 0);
    pop();
  }
  }
  function drawScreen6() {
  
    //text("-- 有終完美 --", width/2, height / 2);
    textAlign(CENTER, CENTER);
    textSize(25);

  if (!animationComplete) {
    fill(0, fadeAlpha);
    text("-- 有終完美 --", width * 0.5, height * 0.5);

    if (fadeAlpha < 255) {
      fadeAlpha += fadeSpeed;
    } else {
      fadeAlpha = 255;
      animationComplete = true;
    }
  } else {
    fill(0, fadeAlpha);
    text("有終完美", width * 0.5, height * 0.5);

    if (fadeAlpha > 0) {
      fadeAlpha -= fadeSpeed;
    } else {
      fadeAlpha = 0;
      animationComplete = false;
    }
  }



  }
  

function handleRightClick() {
  // 右矢印がクリックされたときの処理を記述する
  // 例: 何かを実行する
  if(currentScreen===0){
    currentScreen = 1;
  }
  else if (currentScreen === 1) {
    currentScreen = 2;
  
  } else if(currentScreen === 2 ){
  currentScreen=3;
  //else if (currentScreen === 2 && insults.length == maxInsultText) {
    //currentScreen = 3;
  } else if (currentScreen === 3) {
    currentScreen = 4;
  } else if (currentScreen === 4) {
    currentScreen = 5;
  } 
  else if (currentScreen === 5) {
    currentScreen = 6;
  } 
}
function handleLeftClick() {
  // 左矢印がクリックされたときの処理を記述する
  // 例: 何かを実行する
  if (currentScreen === 1) {
    currentScreen = 0;
  }
  else if (currentScreen === 2) {
    currentScreen = 1;
  } else if (currentScreen === 2 && encouragementCount < maxEncouragementCount&&mouseX > width*0.8) {
    createInsults();
  } else if(currentScreen === 3 ){
  currentScreen=2;
  //else if (currentScreen === 2 && insults.length == maxInsultText) {
    //currentScreen = 3;
  } else if (currentScreen === 4) {
    currentScreen = 3;
  } else if (currentScreen === 5) {
    currentScreen = 4;
  } 
  else if (currentScreen === 6) {
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

