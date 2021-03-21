# Chapter 1

## Communications Network (통신망)
- Telecommunication Network 전화통신망  *[현업에선 통신망을 전화통신망으로 호칭]*
- Broadcast Network 방송통신망
- Data communication Network 데이터통신망

## 데이터의 성격
- Delivery	전달
- Accuracy	정확성
- Timeliness	시간성
- Jitter		동작 순간을 주는 타이밍 상의 편차를 지칭

## 데이터통신 시스템 구성
![화면 캡처 2021-03-19 201354](https://user-images.githubusercontent.com/62434898/111782301-322edc00-88fc-11eb-82aa-1f162cbd623d.jpg)



## 단말장치 (DTE : Date Termial Equipment)  
*[키워드 : 입출력]*
- 통신시스템과 사용자의 접점에 위치하여 데이터를 입력하거나 처리된 결과를 출력하는 장치
> 입출력제어 및 송수신 제어 기능 수행

## 신호변환장치 (DCE : Data Circuit Eqipment)  
*[키워드 : Signal Conversion]*
- 컴퓨터나 단말 장치의 데이터를 통신 회선에 적합한 신호로 변경하거나, 통신 회선의 신호를 컴퓨터나 단말장치에 적합한 신호로 변경하거나, 통신 회선의 신호를 컴퓨터나 단말 장치에 적합한 데이터로 변경하는 신호 변환 기능(Signal Converion)을 수행

## 통신제어장치 (CCU : Communication Control Unit)  
*[키워드 : Control]*
- 컴퓨터나 통신회선을 통하여 송수신되는 과정을 제어하고 감시하는 기능
> 컴퓨터의 통신제어프로그램과 통신제어장치(CCU) 구별 필요

## 데이터 통신 시스템의 특징
- 고속, 고품질의 통신서비스
- 거리와 시간의 한계 극복
- 대용량 파일의 공동 이용
- 분산 처리 방법 활용
- 시스템 신뢰도 높음	

## 자주 쓰이는 통신 용어정리
- throughput (처리량)
> 통신에서 네트워크 상의 어떤 노드나 터미널로부터 또 다른 터미널로 전달되는 단위 시간당 디지털 데이터 전송으로 처리하는 양을 말한다
- bandwidth (대역폭)
> 특정한 기능을 수행할 수 있는 주파수의 범위로, 헤르츠 단위로 측정된다.
- latency (지연시간)
> 자극과 반응 사이의 시간, 지연시간 및 응답속도라고 한다. FPS에서 중요시 되는 부분
- delay (지연)	

## Topology (망구성방식)
> 컴퓨터 네트워크의 요소들(링크, 노드 등)을 물리적으로 연결해 놓은 것, 또는 그 연결 방식
- 목적 : high throughput(bandwidth) 높은 대역폭과 처리량 & low latency 낮은 지연시간
- Mesh형, Star형, Bus형, Ring형

## Switching
인터넷은 스위치 네트워크, 패킷 교환망이다.
- circuit-switched network = telecommunication network (전화망)  *[키워드 : dedicated]*
- packet-switched network = data network (데이터망)  *[키워드 : shared]*
[써킷 교환망, 패킷 교환망 표를 만들어서 비교]

## Protocol (프로토콜)
- 정의 Syntax [구문] , Semantics [의미], Timing [순서]
 
## OSI의 7계층
 ![2](https://user-images.githubusercontent.com/62434898/111783399-88504f00-88fd-11eb-8517-1765464d17f2.jpg)

통신에 필요한 각 기능들을 각 계층별로 나누어 놓은 것

![OSI 7계층 정리표](https://user-images.githubusercontent.com/62434898/111903301-fa06d500-8a84-11eb-8b7b-45e8d379cbff.jpg)

TCP/IP vs OSI Model

# Chapter 2 : Physical Layer

## Analog & Digital Signals
 
아날로그 시그널 : 시간 순서에 따라 연속된 신호 [사람의 음성 : 4kHz]
디지털 시그널 : 0, 1 의 신호로 신호의 유무 존재

## Digital Signal 의 장단점
- 아날로그 시그널보다 더 저렴
- 노이즈에 대해 덜 민감
- 감쇠에는 약하기 때문에 산호를 멀리보내기 어려움







## Data and Signals
  
- digital data > Modem > analog signal
- analog data > Codec > digital signal
Transmission of Digital Signals
- Baseband transmission
> 디지털 신호를 아날로그 신호로 바꾸지 않고(변조없이) 그대로 전송
> 장거리 전송에 적합하지 않고, 따라서 LAN등 가까운 거리에 사용 (디지털 시그널은 감쇠에 약하기때문)
- Broadband transmission
> 디지털 신호를 전송하기 위해 아날로그 신호로 바꾸어 전송(변조이용)

## Transmission Impairment 전송 장애

- Attenuation 감쇠 : 증폭기(amplifiers)를 통해 해결 
- Distortion 왜곡
- Noise 잡음

# Chapter 4 : Digital Transmission

## Digital-to-digital conversion	
- Line coding
> 디지털 데이터를 디지털 시그널로, 혹은 디지털 시그널을 디지털 데이터로 바꾸는 것
- Block coding
- Scrambling
- 
## Analog-to-digital conversion
- Pulse Code Modulation (PCM)
> 아날로그 데이터를 디지털 시그널로 바꾸는 가장 기본적인 테크닉
> 표본화, 양자화, 부호화의 세가지 단계를 거치게 된다.
- Delta Modulation (DM)
> PCM의 복잡한 기술을 단순화 시킨 테크닉

## Transmission modes

-Parrallel 전송
- Serial 전송
> Asynchronous
> Synchronous
> Isochronous

## Parrallel Transmission 병렬 전송
 
n개의 와이어를 사용하여 n개의 bit를 한번에 전송함

## Serial Transmission 직렬 전송
 
한 개의 와이어를 사용하여 한번에 한 개의 bit를 전송함
이때, 이 비트를 동기식으로 보낼지, 비동기식으로 보낼지, 일정하게 보낼지에 따라 구분됨
[Synchronous, Asynchronous, Isochronous]

## Asynchronous Transmission 비동기 전송

비동기전송에서는 시작부분에 1개의 시작비트(0)와 각 바이트 끝에 하나 이상의 정지비트(1)를 보낸다.
각 바이트 간에는 간격이 있을 수 있다.
- 여기서 비동기식이란 ‘바이트수준에서의 비동기’를 의미하지만, 비트들을은 여전히 동기화되고 비트들의
지속시간은 동일하다. [비트레이트는 동기화되어있고 바이트 단위로 비동기화 되어있다]
 

## Synchronous Transmission 동기 전송
동기전송에서는 시작비트/정지비트 및 간격 없이 차례로 비트를 보낸다.
- 비트를 그룹화하는 것은 수신자의 책임이다.
 
## 동기식/비동기식 전송 비교

- 동기식 전송(고속, 근거리)
> 미리 정해진 수 만큼의 문자열을 한 블록(프레임)으로 만들어 일시에 전송하는 방식
> 제어문자(SYN)등, 전송 속도 빠름
> 시작 / 종료 비트가 없음, 오버헤드가 없고, 효율이 좋음
> 블록과 블록사이에 휴지(idle time)가 없음
- 비동기식 전송(저속, 원거리)
> 한번에 한 문자씩 전송, 앞뒤에 시작비트와 종료비트를 붙여서 (바이트와 바이트 사이를) 구분
> 시작 / 종료 비트가 필요함, 전송 효율이 낮음

## Isochronous Transmission 등시식 전송

real-time 오디오나 비디오에서 전체 frame stream이 도착해야 하는 상황에서 실시간으로 모든 frame을 전송

## 병렬/ 직렬 전송 비교

- 병렬 전송 (컴퓨터 내부통신)
> 각 비트들을 여러 개의 전송매체(채널)을 통하여 동시에 전송
> 전송 속도는 빠르지만 구성 비용이 많이 듬 > 근거리 전송
- 직렬 전송 (통신망)
> 하나의 전송매체를 통하여 한 비트씩 순서적으로 전송
> 전송 속도가 느리지만, 구성 비용이 적게 듬 > 원거리 전송

## 용어 정리

-Data Rate
> bps(bits per second) 단위로 측정한 데이터 전송률
- Baud(보)
> baud 단위로 측정 : signal elements per second
> Baud =1 / T ( T: 신호당 속도, 신호 1개(변조 또는 전송에 걸리는 시간)
> Modularion rate(변조 속도)

