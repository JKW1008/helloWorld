/** 9로 나눈 나머지 */
// function solution(number) {
//   let answer = 0;
//   const numS = String(number);
//   for (let i = 0; i < number.length; i++) {
//     answer += Number(numS[i]);
//   }
//   return answer % 9;
// }
// console.log(solution("9879"));

/** 배열 만들기 3 */
// function solution(arr, intervals) {
//   let answer = [
//     arr.slice(intervals[0][0], [0][1] + 1),
//     arr.slice(intervals[1][0], [1][1] + 1),
//   ];
//   return answer;
// }

// function solution(arr, intervals) {
//   const firstInterval = arr.slice(intervals[0][0], intervals[0][1] + 1);
//   const secondInterval = arr.slice(intervals[1][0], intervals[1][1] + 1);
//   return firstInterval.concat(secondInterval);
// }
// console.log(
//   solution(
//     [1, 2, 3, 4, 5],
//     [
//       [1, 3],
//       [0, 4],
//     ]
//   )
// );

// const solution = (arr, intervals) => {
//   return intervals.reduce((acc, cur) => {
//     const [from, to] = cur;
//     const curNums = arr.slice(from, to + 1);
//     return acc.concat(curNums);
//   }, []);
// };

/** x 사이의 개수 */
// const solution = (myString) => {
//   return myString.split("x").map((a) => a.length);
// };
// console.log(solution("oxooxoxxox"));

/** 간단한 식 계산하기 */
// const solution = (binomial) => {
//   const [a, op, b] = binomial.split(" ");
//   const operator = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//   };
//   return operator[op](Number(a), Number(b));
// };
// console.log("45+22");

// const solution = (binomial) => {
//   return eval(binomial);
//   /** eval() js내에 문자열로 표현된 자바스크립트 코드를 실행 */
// };
// console.log(solution("12+12"));

/** 특별한 이차원 배열2 */
// const solution = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i][j] !== arr[j][i]) {
//           return 0;
//         }
//       }
//     }
//     return 1;

//   return arr.every((row, i) => row.every((value, j) => value === arr[j][i]))
//     ? 1
//     : 0;
// };
// console.log(
//   solution([
//     [1, 2, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//   ])
// );
// console.log(
//   solution([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

/** 중복된 문자 제거 */
// const solution = (my_string) => {
//   /** for of 사용,  */
//   /** 중복되지않는 배열만 추가, 문자열로 변환 */
//   let arr = [];
//   for (const str of my_string) {
//     if (!arr.includes(str)) {
//       arr.push(str);
//     }
//   }
//   return arr.join("");

//   /** ES6 추가된 Set 메서드 사용 */
//   return [...new Set(my_string)].join("");
// };

// console.log(solution("people"));
// console.log(solution("we are the World"));
