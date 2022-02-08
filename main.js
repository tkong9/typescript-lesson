var myName = 'hi';
var names = ['ted', 'kong'];
var song = {
    singer: 'ted',
    songTitle: 'kong',
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 어레이 = [1, '2', 3];
var 오브젝트 = { data: '123' };
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
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
function intro(name) {
    if (name === undefined)
        console.log('이름이 없습니다.');
    console.log("\uD0DC\uC6D0");
}
console.log(intro('태원'));
console.log(intro());
/**
(숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.

숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.

숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
 */
function cnt(x) {
    var str = String(x);
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
function marry(monthlyPay, ownHome, attractive) {
    var totalScore = 0;
    totalScore += monthlyPay;
    if (ownHome)
        totalScore += 500;
    if (attractive === '상')
        totalScore += 100;
    if (totalScore >= 600)
        return '결혼가능';
}
function myFunction(x) {
    var y = x;
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
function cleaning(arr) {
    var cleanedArr = [];
    arr.forEach(function (e) {
        if (typeof e === 'string')
            cleanedArr.push(Number(e));
        else
            cleanedArr.push(e);
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
function getLastCourse(teacher) {
    if (typeof teacher.subject === 'string')
        return teacher.subject;
    return teacher.subject[teacher.subject.length - 1];
}
console.log(getLastCourse({ subject: 'math' }));
console.log(getLastCourse({ subject: ['science', 'art', 'korean'] }));
var combined = {
    name: 'taewon',
    age: 10,
    color: 'red',
};
console.log(combined);
var testNewType = { size: 280, position: [2, 4] };
var haha = {
    name: 'ted',
    phone: 123,
    email: 'email',
    minor: true,
};
console.log(haha);
var hi;
hi = 123;
console.log(hi);
function literalFunction(a) {
    console.log(a);
}
literalFunction('hello');
function rockScissorPaper(a) {
    var ans = [];
    ans.push(a);
    return ans;
}
console.log(rockScissorPaper('Rock'));
function play(input) {
    var ans = [];
    ans.push(input);
    return ans;
}
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    },
};
회원정보.plusOne(1);
회원정보.changeName();
회원정보.plusOne(1);
회원정보.changeName();
회원정보.changeName();
console.log(회원정보);
var cutZero = function (x) {
    if (x[0] === '0') {
        return x.substring(1);
    }
    return x;
};
var removeDash = function (x) {
    if (x.indexOf('-') !== -1) {
        var strArr = x.split('-');
        return Number(strArr.join(''));
    }
    return Number(x);
};
var 만들함수 = function (x, cutZero, removeDash) {
    return removeDash(cutZero(x));
};
console.log(만들함수('010-1111-2222', cutZero, removeDash));
console.log(만들함수('10-1111-3333', cutZero, removeDash));
