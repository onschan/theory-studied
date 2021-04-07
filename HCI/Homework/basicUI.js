var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var main = true;

// 둥근 네모
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w,y,x+w,y+h,r);
  this.arcTo(x+w,y+h,x,y+h,r);
  this.arcTo(x,y+h,x,y,r);
  this.arcTo(x,y,x+w,y,r);
}

// 선그리기
function drawLine(sx, sy, ex, ey, wd)
{
  context.lineWidth = wd;
  context.lineCap="square";
  context.beginPath();
  context.moveTo(sx, sy);
  context.lineTo(ex, ey);
  context.stroke();
}

// 둥근 선그리기
function drawRoundLine(sx, sy, ex, ey, wd)
{
  context.lineWidth = wd;
  context.lineCap="round";
  context.beginPath();
  context.moveTo(sx, sy);
  context.lineTo(ex, ey);
  context.stroke();
}

// 클리어
function clear() {
  context.beginPath();
  context.fillStyle = "#8E2B38";
  context.rect(0,0,480,800);
  context.fill();
  context.closePath();
}

// 광운대 로고
function makeLogo() {
  context.beginPath();
  context.arc(150, 49, 40, 0, Math.PI*2, false);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(150, 49, 38, 0, Math.PI*2, false);
  var brush = context.createRadialGradient(140,33,0.2,150,45,38);
      brush.addColorStop(0, "white");
      brush.addColorStop(1, "#900000");
  context.fillStyle = brush;
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(150, 49, 25, 0, Math.PI*2, false);
  context.fillStyle = "#f0fffc";
  context.fill();
  context.closePath();

  context.font="bold 34px 조선100년체";
  context.fillText("광운대학교", 200, 51);
  context.font="15px 고딕";
  context.fillText("KwangWoon University", 200, 72);

}

// 메인메뉴
function mainMenu() {
  context.rect(15, 100, 450, 600);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(15,285);
  context.lineTo(30,300);
  context.lineTo(15,315);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(465,285);
  context.lineTo(450,300);
  context.lineTo(465,315);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(15,485);
  context.lineTo(30,500);
  context.lineTo(15,515);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(465,485);
  context.lineTo(450,500);
  context.lineTo(465,515);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(300,100);
  context.lineTo(315,115);
  context.lineTo(330,100);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(150,700);
  context.lineTo(165,685);
  context.lineTo(180,700);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(300,700);
  context.lineTo(315,685);
  context.lineTo(330,700);
  context.fillStyle = "#8E2B38";
  context.fill();
  context.closePat

  context.beginPath();
  context.lineWidth = 1;
  context.strokeStyle = "#000000";
  context.moveTo(30,300);
  context.lineTo(450,300);
  context.moveTo(30,500);
  context.lineTo(450,500);
  context.moveTo(165,300);
  context.lineTo(165,685);
  context.moveTo(315,115);
  context.lineTo(315,685);
  context.setLineDash( [3,3] );
  context.stroke();
  context.closePath();
  context.setLineDash([]);


  // 모바일이용증
  context.font="bold 19px 고딕";
  context.fillText("모바일 이용증", 35, 140);

  context.beginPath();
  context.roundRect(230, 180, 65, 100, 13);
  context.fillStyle = "#C7B49F";
  context.fill();
  context.closePath();

  context.beginPath();
  context.rect(235, 195, 55, 70);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(262, 188.5, 3, 0, Math.PI*2, false);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.strokeStyle = "#ffffff";
  drawRoundLine(255, 273, 275, 273, 5);
  drawLine(230, 205, 230, 255, 10);

  context.strokeStyle = "#000080";
  context.lineWidth = 5;
  context.lineCap="round";
  context.lineJoin="round";
  context.beginPath();
  context.moveTo(225, 210);
  context.lineTo(205, 210);
  context.lineTo(205, 250);
  context.lineTo(260, 250);
  context.lineTo(260, 210);
  context.lineTo(240, 210);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#000080";
  context.lineWidth = 5;
  context.lineCap="square";
  context.beginPath();
  context.moveTo(232.5, 207);
  context.lineTo(232.5, 212);
  context.stroke();
  context.closePath();

  context.strokeStyle = "red";
  drawRoundLine(238, 225, 252, 225, 3);
  drawRoundLine(238, 231, 252, 231, 3);
  drawRoundLine(238, 237, 252, 237, 3);

  context.beginPath();
  context.arc(222, 225, 4, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(215,242);
  context.quadraticCurveTo(222,220, 229,242);
  context.stroke();

  // 공지사항
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("공지사항", 335, 140);

  context.fillStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(390,205);
  context.bezierCurveTo(420,235,450,205,450,235);
  context.bezierCurveTo(450,265,420,235,390,265);
  context.lineTo(385,260);
  context.lineTo(385,210);
  context.fill();

  context.fillStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(425,245);
  context.lineTo(415,275);
  context.lineTo(430,275);
  context.lineTo(440,245);
  context.fill();

  context.strokeStyle = "#000080";
  drawRoundLine(356, 207, 373, 217, 5);
  drawRoundLine(354, 230, 373, 230, 5);
  drawRoundLine(356, 253, 373, 243, 5);

  context.beginPath();
  context.rect(405, 200, 12, 60);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.strokeStyle = "red";
  drawRoundLine(411, 220, 411, 250, 5);

  // 자유열람실
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("자유열람실", 35, 340);

  context.strokeStyle = "#000080";
  drawRoundLine(70, 450, 140, 450, 5);
  drawRoundLine(80, 450, 80, 480, 5);
  drawRoundLine(130, 450, 130, 480, 5);

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.arc(115, 412, 7, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(100,440);
  context.quadraticCurveTo(115,400, 130,440);
  context.stroke();

  context.strokeStyle = "red";
  drawRoundLine(74, 433, 92, 433, 4);
  drawRoundLine(74, 440, 92, 440, 4);

  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(105,436);
  context.quadraticCurveTo(113,435, 115,440);
  context.stroke();

  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(125,436);
  context.quadraticCurveTo(117,435, 115,440);
  context.stroke();

  // 내자리
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("내 자리", 185, 340);

  context.strokeStyle = "#000080";
  drawRoundLine(225, 480, 290, 480, 7);

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.arc(256, 417, 14, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(230,465);
  context.quadraticCurveTo(255,402, 285,465);
  context.stroke();

  context.beginPath();
  context.roundRect(242, 450, 30, 20,4);
  context.fillStyle = "red";
  context.fill();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  drawRoundLine(230, 467, 236, 467, 7);
  drawRoundLine(285, 467, 279, 467, 7);


  // 그룹스터디룸
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("그룹스터디룸", 335, 340);

  context.strokeStyle = "#000080";
  drawRoundLine(350, 480, 440, 480, 7);

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.arc(365, 440, 8, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.arc(395, 430, 12, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.arc(425, 440, 8, 0, Math.PI*2, false);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(375,465);
  context.quadraticCurveTo(395,420, 415,465);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(355,465);
  context.quadraticCurveTo(365,435, 378,460);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(435,465);
  context.quadraticCurveTo(425,435, 414,460);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  context.beginPath();
  context.moveTo(375,465);
  context.quadraticCurveTo(395,420, 415,465);
  context.stroke();
  context.closePath();

  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(379,460);
  context.quadraticCurveTo(390,459, 395,466);
  context.stroke();

  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(411,460);
  context.quadraticCurveTo(400,459, 395,466);
  context.stroke();

  // PC좌석현황
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("PC좌석 현황", 35, 540);

  context.beginPath();
  context.roundRect(70, 600, 80, 60, 8);
  context.fillStyle = "#C7B49F";
  context.fill();
  context.closePath();

  context.beginPath();
  context.rect(75, 605, 70, 40);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(110, 652, 3, 0, Math.PI*2, false);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.strokeStyle = "#C7B49F";
  drawRoundLine(85, 675, 136, 675, 6);
  drawLine(103, 652, 103, 675, 6);
  drawLine(117, 652, 117, 675, 6);

  context.strokeStyle = "#000080";
  drawRoundLine(90, 612, 90, 634, 4);
  drawRoundLine(130, 612, 130, 634, 4);
  drawRoundLine(110, 615, 110, 637, 4);
  drawRoundLine(90, 612, 110, 615, 4);
  drawRoundLine(90, 634, 110, 637, 4);
  drawRoundLine(110, 615, 130, 612, 4);
  drawRoundLine(110, 637, 130, 634, 4);

  context.strokeStyle = "#ffffff";
  drawLine(99, 614, 101, 614, 8);

  context.strokeStyle = "red";
  drawRoundLine(100, 612, 100, 616, 6);

  // 도서관 홈페이지
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("도서관", 185, 540);
  context.font="bold 19px 고딕";
  context.fillText("홈페이지", 185, 560);

  context.beginPath();
  context.roundRect(230, 620, 70, 50, 5);
  context.fillStyle = "#C7B49F";
  context.fill();
  context.closePath();

  context.beginPath();
  context.rect(235, 632, 60, 32);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(278, 626, 3, 0, Math.PI*2, false);
  context.arc(285, 626, 3, 0, Math.PI*2, false);
  context.arc(292, 626, 3, 0, Math.PI*2, false);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.strokeStyle = "#ffffff";
  drawLine(230, 645, 230, 670, 10);
  drawLine(230, 670, 255, 670, 20);

  context.beginPath();
  context.fillStyle = "#000080";
  context.arc(245, 645, 3, 0, Math.PI*2, false);
  context.moveTo(245, 640);
  context.lineTo(222, 650);
  context.lineTo(268, 650);
  context.lineTo(245, 640);
  context.fill();
  context.closePath();

  context.strokeStyle = "red";
  drawLine(232, 654, 232, 668, 4);
  drawLine(240, 654, 240, 668, 4);
  drawLine(248, 654, 248, 668, 4);
  drawLine(256, 654, 256, 668, 4);

  context.beginPath();
  context.fillStyle = "#000080";
  context.moveTo(225, 672);
  context.lineTo(223, 678);
  context.lineTo(265, 678);
  context.lineTo(263, 672);
  context.fill();
  context.closePath();

  // 메시지
  context.fillStyle = "#8E2B38";
  context.font="bold 19px 고딕";
  context.fillText("메시지", 335, 540);

  context.beginPath();
  context.roundRect(375, 625, 70, 45, 5);
  context.fillStyle = "#C7B49F";
  context.fill();
  context.closePath();

  context.beginPath();
  context.rect(380, 630, 60, 35);
  context.fillStyle = "#ffffff";
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#C7B49F";
  context.moveTo(380, 630);
  context.lineTo(410, 655);
  context.lineTo(440, 630);
  context.lineTo(380, 630);
  context.fill();
  context.closePath();

  context.strokeStyle = "#000080";
  drawRoundLine(340, 640, 365, 640, 5);
  drawRoundLine(345, 650, 365, 650, 5);
  drawRoundLine(350, 660, 365, 660, 5);

  context.strokeStyle = "red";
  drawRoundLine(385, 660, 395, 650, 4);
  drawRoundLine(434, 660, 424, 650, 4);

}

// 종료버튼
function shutdown() {
  context.beginPath();
  context.strokeStyle = "#C7C6C6";
  context.lineWidth = 4;
  context.arc(445, 50, 12, Math.PI*1.7, Math.PI*3.3, false);
  context.stroke();
  context.closePath();

  drawRoundLine(445, 35, 445, 45, 5);
}

// 하단
function below() {
context.font="bold 14px 돋움";
context.fillStyle = "#C7B49F";
context.fillText("2015405060 SEUNGCHAN ON.", 132, 760);
context.fillText("HCI HOMEWORK.",180, 780);
}

makeLogo();
mainMenu();
shutdown();
below();

function mobile() {
  context.beginPath();
  context.fillStyle = "#B5B7B5";
  context.rect(0,100,480,720);
  context.fill();
  context.strokeStyle = "#8E2B38";
  context.lineWidth = 10;
  context.fillStyle = "#ffffff"
  context.roundRect(30, 180,420, 520,5);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#ffffff";
  context.moveTo(100,185);
  context.lineTo(170,140);
  context.lineTo(310,140);
  context.lineTo(380,185);
  context.fill();
  context.closePath();

  context.fillStyle = "#8E2B38";
  context.font="bold 28px 고딕";
  context.fillText("모바일 이용증", 150, 190);

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(65,250);
  context.lineTo(415,250);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(170,240);
  context.lineTo(170,250);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(65,300);
  context.lineTo(415,300);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(170,290);
  context.lineTo(170,300);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(65,350);
  context.lineTo(415,350);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(170,340);
  context.lineTo(170,350);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(65,400);
  context.lineTo(415,400);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 1;
  context.moveTo(170,390);
  context.lineTo(170,400);
  context.stroke();
  context.closePath();

  context.fillStyle = "#949594";
  context.font="bold 20px 고딕";
  context.fillText("이      름", 75, 240);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("온승찬", 185, 240);

  context.fillStyle = "#949594";
  context.font="bold 20px 고딕";
  context.fillText("학교/교번", 75, 290);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("2015405060", 185, 290);

  context.fillStyle = "#949594";
  context.font="bold 20px 고딕";
  context.fillText("소      속", 75, 340);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("법학부", 185, 340);

  context.fillStyle = "#949594";
  context.font="bold 20px 고딕";
  context.fillText("신      분", 75, 390);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("학부생", 185, 390);

  context.beginPath();
  context.strokeStyle = "#C7C6C6";
  context.lineWidth = 10;
  context.rect(165, 430,170, 170);
  context.stroke();
  context.closePath();

  var img = new Image();
  img.src="QR.jpg";
  img.onload = function() {
    context.drawImage(img,175,440,150,150);
  }

  context.beginPath();
  context.strokeStyle = "#A6A9A6";
  context.lineWidth = 4;
  context.moveTo(65,630);
  context.lineTo(415,630);
  context.stroke();
  context.closePath();

  context.fillStyle = "#504F53";
  context.font="bold 15px 고딕";
  context.fillText("KWANGWOON UNIVERSITY", 65, 650);

  context.fillStyle = "#504F53";
  context.font="bold 24.5px 고딕";
  context.fillText("MOBILE LIBRARY", 65, 675);

  context.fillStyle = "#504F53";
  context.font="bold 35px Arial Black";
  context.fillText("QR CODE", 270, 670, 150);

  context.beginPath();
  context.fillStyle = "#A7A683";
  context.rect(0, 770,480, 30);
  context.fill();
  context.closePath();

  context.fillStyle = "#ffffff";
  context.font="18px 고딕";
  context.fillText("215405060 온승찬 HCI HOMEWORK", 100, 790, 500);
}

function freeRoom() {
  context.beginPath();
  context.fillStyle = "#B5B7B5";
  context.rect(0,100,480,720);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#ffffff"
  context.rect(30, 120,420, 620);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#ffffff";
  context.moveTo(100,185);
  context.lineTo(170,140);
  context.lineTo(310,140);
  context.lineTo(380,185);
  context.fill();
  context.closePath();

  context.beginPath();
  context.moveTo(30,143);
  context.lineTo(45,158);
  context.lineTo(30,173);
  context.fillStyle = "red";
  context.fill();
  context.closePath();

  context.fillStyle = "#8E2B38";
  context.font="bold 24px 고딕";
  context.fillText("자유열람실", 52, 170);

  context.beginPath();
  context.strokeStyle = "#000000";
  context.lineWidth = 1;
  context.moveTo(30,200);
  context.lineTo(450,200);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = "#000000";
  context.lineWidth = 1;
  context.moveTo(30,250);
  context.lineTo(450,250);
  context.stroke();
  context.closePath();

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("열람실", 90, 235);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("사 용", 240, 235);

  context.fillStyle = "#000000";
  context.font="bold 20px 고딕";
  context.fillText("잔 여", 350, 235);

  context.beginPath();
  context.lineWidth = 0.3;
  context.strokeStyle = "#000000";
  context.moveTo(60,300);
  context.lineTo(420,300);
  context.moveTo(60,350);
  context.lineTo(420,350);
  context.moveTo(60,400);
  context.lineTo(420,400);
  context.setLineDash( [3,3] );
  context.stroke();
  context.closePath();
  context.setLineDash([]);

  context.fillStyle = "#000000";
  context.font="17px 고딕";
  context.fillText("제1자유열람실(1F)", 70, 285);

  context.fillStyle = "#000000";
  context.font="17px 고딕";
  context.fillText("제2자유열람실(B1F)", 70, 335);

  context.fillStyle = "#000000";
  context.font="17px 고딕";
  context.fillText("제3자유열람실(B1F)", 70, 385);

  context.beginPath();
  context.fillStyle = "#C7C9C9";
  context.rect(232,262,110,30);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#000080";
  context.rect(232,262,70,30);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#C7C9C9";
  context.rect(232,312,110,30);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#000080";
  context.rect(232,312,55,30);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#C7C9C9";
  context.rect(232,362,110,30);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#000080";
  context.rect(232,362,81,30);
  context.fill();
  context.closePath();

  context.fillStyle = "#ffffff";
  context.font="15px 굴림";
  context.fillText("75/122", 265, 282);

  context.fillStyle = "#ffffff";
  context.font="15px 굴림";
  context.fillText("105/211", 265, 332);

  context.fillStyle = "#ffffff";
  context.font="15px 굴림";
  context.fillText("116/165", 265, 382);

  context.fillStyle = "#000000";
  context.font="bold 17px 고딕";
  context.fillText("47", 380, 285);

  context.fillStyle = "#000000";
  context.font="bold 17px 고딕";
  context.fillText("106", 380, 335);

  context.fillStyle = "#000000";
  context.font="bold 17px 고딕";
  context.fillText("49", 380, 385);

  context.beginPath();
  context.strokeStyle = "#000000";
  context.lineWidth = 1;
  context.rect(60,670,360,50);
  context.stroke();
  context.closePath();

  context.fillStyle = "#8E2B38";
  context.font="bold 20px 고딕";
  context.fillText("내 발권/예약정보", 170, 705);

  context.beginPath();
  context.fillStyle = "#A7A683";
  context.rect(0, 770,480, 30);
  context.fill();
  context.closePath();

  context.fillStyle = "#ffffff";
  context.font="18px 고딕";
  context.fillText("215405060 온승찬 HCI HOMEWORK", 100, 790, 500);
}

// 클릭 이벤트 발생
canvas.onmousedown = function(event) {
  var x = event.x - 20;
  var y = event.y - 20;

  if (x >= 435 && x <= 470 && y >= 25 && y <= 75) {
    main = true;
    clear();
    makeLogo();
    mainMenu();
    shutdown();
    below();
  }
  else if (main && x >= 15 && x < 315 && y >= 100 && y < 300) {
    main = false;
    mobile();
  }
  else if (main && x >= 315 && x < 465 && y >= 100 && y < 300)  alert("공지사항");
  else if (main && x >= 15 && x < 165 && y >= 300 && y < 500)
  {
    main = false;
    freeRoom();
  }
  else if (main && x >= 165 && x < 315 && y >= 300 && y < 500)  alert("내 자리")
  else if (main && x >= 315 && x < 465 && y >= 300 && y < 500)  alert("그룹스터디룸")
  else if (main && x >= 15 && x < 165 && y >= 500 && y < 700)  alert("PC좌석현황")
  else if (main && x >= 165 && x < 315 && y >= 500 && y < 700)  alert("도서관 홈페이지")
  else if (main && x >= 315 && x < 465 && y >= 500 && y < 700)  alert("메시지")

}
