let myName: string = 'hi';
let names: string[] = ['ted', 'kong'];
let song: { singer: string; songTitle: string } = {
  singer: 'ted',
  songTitle: 'kong',
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

var 어레이: (number | string)[] = [1, '2', 3];
var 오브젝트: { data: number | string } = { data: '123' };

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

console.log(학교.score);
console.log(학교.friend);

/*
(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고

아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.

파라미터와 return 타입지정도 잘 해봅시다. 
 */

function intro(name?: string): void {
  if (name === undefined) console.log('이름이 없습니다.');
  console.log(`태원`);
}

console.log(intro('태원'));
console.log(intro());

/**
(숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.

숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.

숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
 */

function cnt(x: number | string): number {
  let str = String(x);
  return str.length;
}

console.log(cnt('ad929a'));

/**
(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

 

(예시)

결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
 */
function marry(
  monthlyPay: number,
  ownHome: boolean,
  attractive: string
): string | void {
  let totalScore: number = 0;
  totalScore += monthlyPay;
  if (ownHome) totalScore += 500;
  if (attractive === '상') totalScore += 100;
  if (totalScore >= 600) return '결혼가능';
}

function myFunction(x: number | string) {
  let y: number = x as number;
  console.log(y);
}

myFunction('fadf10');

/**
(숙제1) 숫자여러개를 array 자료에 저장해놨는데

가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

이걸 클리닝해주는 함수가 필요합니다. 

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

모르는 부분은 구글검색해도 봐드림 
 */

function cleaning(arr: (number | string)[]): number[] {
  let cleanedArr: number[] = [];
  arr.forEach((e) => {
    if (typeof e === 'string') cleanedArr.push(Number(e));
    else cleanedArr.push(e);
  });
  return cleanedArr;
}

console.log(cleaning([1, '2', 3]));

/**
 * 
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 

과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
철수쌤같은 선생님 object 자료를 집어넣으면 

그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

그리고 타입지정도 엄격하게 해보도록 합시다. 
(동작예시)

만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
 */
function getLastCourse(teacher: { subject: string | string[] }): string {
  if (typeof teacher.subject === 'string') return teacher.subject;

  return teacher.subject[teacher.subject.length - 1];
}

console.log(getLastCourse({ subject: 'math' }));
console.log(getLastCourse({ subject: ['science', 'art', 'korean'] }));
// console.log(getLastCourse({ hello: 'hi' })); error!!

/**
(숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

그건 여러분들이 한번 테스트해보길 바랍니다. 
 */

type type1 = { name: string; age: number };
type type2 = { name: string; color: string };
type combineType = type1 & type2;

let combined: combineType = {
  name: 'taewon',
  age: 10,
  color: 'red',
};
console.log(combined);

/**
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

1. 이 타입은 object 자료형이어야합니다.

2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type alias로 만들어보셈 
 */

type newType = { color?: string; size: number; readonly position: number[] };

let testNewType: newType = { size: 280, position: [2, 4] };

/*
(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

type User = { name: string; phone: number | string; email: string };

/**
(숙제4). 다음을 만족하는 type alias를 만들어보십시오.

1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
 */

type ExtraUserInfo = User & { minor: boolean };

let haha = {
  name: 'ted',
  phone: 123,
  email: 'email',
  minor: true,
};

console.log(haha);

let hi: 123;
hi = 123;
console.log(hi);

function literalFunction(a: 'hello') {
  console.log(a);
}
literalFunction('hello');

type RockScissorPaper = 'Rock' | 'Scissor' | 'Paper';
function rockScissorPaper(a: RockScissorPaper): RockScissorPaper[] {
  let ans: RockScissorPaper[] = [];
  ans.push(a);
  return ans;
}

console.log(rockScissorPaper('Rock'));

/**
Q. 이런 함수는 어떻게 만들까요?

- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고

- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.

- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능

- ['가위', '바보'] 이런거 return하면 에러나야함 
 */
type RSP = 'rock' | 'scissor' | 'paper';
function play(input: RSP): RSP[] {
  let ans: RSP[] = [];
  ans.push(input);
  return ans;
}

/**
 (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

- type 키워드를 쓰든 말든 알아서 합시다. 
 */

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: 'kim',
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('안녕');
  },
};

회원정보.plusOne(1);
회원정보.changeName();
회원정보.plusOne(1);
회원정보.changeName();
회원정보.changeName();
console.log(회원정보);

/**
(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 

 */
type type3 = (x: string) => string;
type type4 = (x: string) => number;

let cutZero: type3 = (x) => {
  if (x[0] === '0') {
    return x.substring(1);
  }
  return x;
};

let removeDash: type4 = (x) => {
  if (x.indexOf('-') !== -1) {
    let strArr = x.split('-');
    return Number(strArr.join(''));
  }
  return Number(x);
};

// console.log(cutZero('010-1111-2222'));
// console.log(cutZero('10-1111-2222'));
// console.log(removeDash('010-1111-2222'));
// console.log(removeDash('01011112222'));

/**
(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

 */

type type5 = (x: string, y: type3, z: type4) => number;

let 만들함수: type5 = (x, cutZero, removeDash) => {
  return removeDash(cutZero(x));
};

console.log(만들함수('010-1111-2222', cutZero, removeDash));
console.log(만들함수('10-1111-3333', cutZero, removeDash));
