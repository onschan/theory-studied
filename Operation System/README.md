## Opeartion System

![1 oper](https://user-images.githubusercontent.com/62434898/113505424-b5496680-9579-11eb-962e-465036692eea.jpg)
 
> 사용자와 하드웨어에서 존재하는 아주 큰 프로그램
> 
> 하드웨어 제어 및 할당하는 역할
> 
> 항상 돌아가는 프로그램 - 커널이라고도함

## Dual-mode Operation
- 두개의 모드 [유저 모드, 커널 모드]
- Exception
> 내부적으로 발생하는 오류 및 비정상적인 작동을 대비하기 위한 예외처리
> 
> [코드 실행 중 발생하는 에러]
- Interrupts
> 외부 디바이스에서 접근 및 발생한 비정상적인 작동에 대비하기 위한 예외처리
> 
> [본체의 종료버튼]

## Transition from User to Kernel Mode

![2 dual](https://user-images.githubusercontent.com/62434898/113505425-b67a9380-9579-11eb-9750-73fb23cad534.jpg)
 
> 시스템콜 호출 시 CPU가 유저모드에서 커널모드로 들어갈 것이다.
> 
> CPU는 Mode bit 라는 것을 가지고 있음
> 
> 	mode bit = 1 유저모드
> 
> 	mode bit = 0 커널모드
> 	
> CPU의 동작에 따라 mode bit의 값이 변한다.
> 
> 현재 mode bit 의 권한과 일치하지 않는 접근시 프로그램이 종료된다.


# Operating System Structure

## User Operating System Interface
- CLI (Command Interpreter)
- Desktop

## System Call and API
- 시스템콜
> OS가 제공하는 프로그래밍 인터페이스 (주로 C로 이루어져있음)
- API(Application Programing Interface) 
> middleware layer에서 어플리케이션 개발자에게 제공하는 함수 묶음(프로그래밍 인터페이스)
> 
> 대표적인 middleware 로는 JVM, POSIX, Win32등이 있음
> 
> 일반적으로 API를 이용하여 어플리케이션을 개발하는 것이 호환성 측면에서 유리하다

> 서로 다른 API에서는 호환되지 않는 것이 보통인데 cygwin등을 통해 강제로 호환시킬 수 있다. (효율성은 낮음)

## API – System Call – OS Relationship

![3 prinf](https://user-images.githubusercontent.com/62434898/113505426-b67a9380-9579-11eb-95ea-b6ec17f2be37.jpg)

위 그림과 같이 user mode의 API에서 printf() 호출 시 kerner mode에서 System Call의 write()를 호출하게 된다.

## System Call Implementation 시스템콜 구현

![4 syteca](https://user-images.githubusercontent.com/62434898/113505428-b7132a00-9579-11eb-8d83-baffe505da7e.jpg) 

> 시스템콜은 내부적으로 각자의 번호를 가지고있다.
 
![5 sytemcalltable](https://user-images.githubusercontent.com/62434898/113505429-b7132a00-9579-11eb-9d7a-3e6fc2ab4d2c.jpg)

> 컴퓨터를 부팅하게 되면 메모리상에 시스템콜 테이블이 배열 형태로 만들어지게된다. 
> 메모리 상에 만들어진 시스템콜 테이블의 각 인덱스는 시스템콜의 고유 번호 연결된 각 함수를 포인트하고있다. 
> 위 그림의 sys_... 는 함수를 가리키는 포인터이다.

## Linux Case
System call 은 매크로 형태로 정의되어있다.
```
#define __NR_read 3
_syscall3(int, __NR_read, int, fd, vvoid*, pBuf, int, nByte)
```
아래와 같은 read 시스템콜이 호출될 경우
```
int read(int fd, void* pBuf, int nByte);
```
시스템콜에 포함되어있는 software interrupt가 발생하게되고 시스템콜을 호출한다.
단, 호출할 시스템콜의 수가 많아질수록 인터럽트를 통해 시스템콜을 호출하는 것이 어려워진다.
이때 block 또는 in-memory table을 통해 시스템콜 인자를 passing 하고 시스템콜을 호출하게 된다.
내부적으로 생성된 block의 위치에 따라 시스템콜을 순차적으로 호출한다.
(윈도우에서는 해당 역할을 위해 stack을 이용한다.)
시스템콜 호출 시 블록의 위치와 시스템콜의 번호, 인자를 전달하며

![6 linux](https://user-images.githubusercontent.com/62434898/113505430-b7abc080-9579-11eb-861d-a7de13ed5c4c.jpg)

위와 같은 순서에 따라 커널모드에서 호출하게된다.	

## Layered Operating System (Layered Approach)
- 프로그램 호출은 계층에 따라 순차적으로 진행된다. 인접 계층을 건너뛰는 경우는 발생할 수 없다. (하향식접근)
- 설계와 디버그가 쉽지만 계층이 많아질 경우 계층구조가 복잡해지며 효율성이 낮아질 수 있다. 
- 하위계층으로의 호출(down call)만 하여야 하며 상위계층으로의 호출(up call)을 하면 안된다. (동일 계층의 호출은 가능)
- 계층의 추가 시 인접코드들의 모든 코드들을 해당 계층에 따라 코딩을 다시 해야한다. (안정성이 부족하다)

## Microkernel System Structure

![7 micro](https://user-images.githubusercontent.com/62434898/113505431-b7abc080-9579-11eb-9355-d6494e95ab5d.jpg)

- 복잡한 계층 구조를 피하기 위해 커널 영역에 필요한 최소한의 기능만 구현하고 다른 기능들은 유저 모드에서 구현되도록 한다. 
- 유저모드에서의 호출이 많아질 경우 과부하의 가능성이 있기도 하다.
- 커널에서의 안정화에 유리하기 때문에 쉽게 기능을 추가할 수 있다.

## Modules
- object-oriented-approach
- 계층적 접근에서 module이 추가된 형태이며 대부분의 경우에서 사용된다.
- 최소한의 기본적 기능만을 탑재하고 있다가 필요한 기능을 import 하여 구현하는 방식을 모듈이라고한다. (ex. CD/USB설치 등)

## Virtual Machines

![8 virtu](https://user-images.githubusercontent.com/62434898/113505432-b7abc080-9579-11eb-9aa8-46cc45e98fd7.jpg)
 
- 대표적 virtual machine으로 VMware가 있다.
- 하나의 하드웨어를 가상적인 CPU 형태로 사용자에게 공급을 한다.
- 본래의 하드웨어 위에 virtual machine 영역이 생성된다.

## System Boot
- Bootstrap program (or boot loader, BIOS)
> Step 1 : DRAM 및 장비들에 대해서 문제를 진단한다.
> 
> Step 2 : 디스크에 있는 커널을 메모리 상으로 로드한다.
- Two-step booting process (Linux, Unix and Windows Os)
> Step 1 : Bootstrap program이 구동되어 문제에 대한 진단하고 종료된다. 그 다음 Boot block(Mast Boot Record, MBR)을 메모리 상으로 로드한다.
> 
> Step 2 :  Boot Block이 커널을 디스크에서 메모리로 로드하게 된다. (부팅하고자 하는 커널을 선택할 수 있다.)

![9 boot](https://user-images.githubusercontent.com/62434898/113505433-b8445700-9579-11eb-824e-5e99edc2bce9.jpg)
 
