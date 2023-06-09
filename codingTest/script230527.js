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
// console.log(solution('we are the World'))

/** 모스 부호 */
// const solution = (letter) => {
//   const morse = {
//     ".-": "a",
//     "-...": "b",
//     "-.-.": "c",
//     "-..": "d",
//     ".": "e",
//     "..-.": "f",
//     "--.": "g",
//     "....": "h",
//     "..": "i",
//     ".---": "j",
//     "-.-": "k",
//     ".-..": "l",
//     "--": "m",
//     "-.": "n",
//     "---": "o",
//     ".--.": "p",
//     "--.-": "q",
//     ".-.": "r",
//     "...": "s",
//     "-": "t",
//     "..-": "u",
//     "...-": "v",
//     ".--": "w",
//     "-..-": "x",
//     "-.--": "y",
//     "--..": "z",
//   };
//   return letter
//     .split(" ")
//     .map((i) => morse[i])
//     .join("");
// };
// console.log(solution(".... . .-.. .-.. ---"));

/** 콜라츠 수열 만들기*/
// const solution = (n) => {
//   const answer = [];
//   while (n !== 1) {
//     answer.push(n);
//     if (n % 2 === 0) {
//       n /= 2;
//     } else {
//       n = 3 * n + 1;
//     }
//   }
//   answer.push(1);
//   return answer;
// };
// console.log(solution(10));

/** 2차원으로 만들기 */
// const solution = (num_list, n) => {
//   let answer = [];

//   for (let i = 0; i < num_list.length / n; i++) {
//     return answer.push(num_list.slice(i * n, i * n + n));
//   }
// };
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

/** A로 B 만들기*/
// const solution = (berfore, after) => {
//   return berfore.split("").sort().join("") === after.split("").sort().join("")
//     ? 1
//     : 0;
// };
// console.log(solution("olleh", "hello"));

/** 팩토리얼 */
// let solution = (n) => {
//   /** for 문 */
//     let answer = 1;

//     for (let i = 1; i <= n; i++) {
//       answer *= i;

//       if (answer === n) {
//         return i;
//       }
//       if (answer > n) {
//         return i - 1;
//       }
//     }
//     return answer - 1;

//   /** while 문 */
//   let factorial = 1;
//   let num = 0;

//   while (factorial <= n) {
//     num++;
//     factorial *= num;
//   }
//   return num - 1;
// };
// console.log(solution(3628800));

/** 문자열 잘라서 정렬하기 */
// const solution = (myString) => {
//   let removeX = myString
//     .split("x")
//     .filter((a) => a !== "")
//     .sort();

//   return removeX;
// };
// console.log(solution("axbxcxdx"));

/** 특별한 이차원 배열 1 */
// const solution = (n) => {
//   const arr = Array(n).fill(Array(n).fill(0));

//   return arr.map((a, i) => {
//     return a.map((b, bi) => (bi == i ? 1 : b));
//   });
// };
// console.log(solution(3));

/** 등차수열의 특정한 항만 더하기 */
// const solution = (a, d, included) => {
//   const arr = [a];
//   for (let i = 1; i < included.length; i++) {
//     arr[i] = arr[i - 1] + d;
//   }
//   return arr.reduce((acc, cur, idx) => (included[idx] ? acc + cur : acc), 0);
// };
// console.log(solution(3, 4, [true, false, false, true, true]));

/** 가까운 수 */
// const solution = (array, n) => {
//   let ans = [];

//   array.forEach((item) => {
//     ans.push(Math.abs(item - n));
//   });

//   const min = Math.min(...ans);

//   let check = [];

//   for (let i = 0; i < ans.length; i++) {
//     if (ans[i] === min) {
//       check.push(array[i]);
//     }
//   }
//   return Math.min(...check);
// };
// console.log(solution([3, 10, 28], 20));

/** k의 개수 */
// const solution = (i, j, k) => {
//   let a = "";

//   for (i; i <= j; i++) {
//     a += i;
//   }

//   return a.split(k).length - 1;
// };

// console.log(solution(1, 13, 1));

/** 진료 순서 정하기 */
// const solution = (emergency) => {
//   let ans = [...emergency];
//   ans.sort((a, b) => b - a);

//   const result = [];
//   for (let i = 0; i < emergency.length; i++) {
//     const index = ans.indexOf(emergency[i]) + 1;
//     result.push(index);
//   }
//   return result;
// };
// console.log(solution([3, 76, 24]));

/** 수 조작하기 2 */
// const solution = (numLog) => {
//   return numLog.reduce((acc, cur, curIdx, originArr) => {
//     if (!curIdx) return "";
//     const prev = originArr[curIdx - 1];
//     switch (prev - cur) {
//       case -1:
//         return acc + "w";
//       case 1:
//         return acc + "s";
//       case -10:
//         return acc + "d";
//       case 10:
//         return acc + "a";
//     }
//   }, "");
// };
// console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));

/** 배열 만들기 5 */
// const solution = (intStrs, k, s, l) => {
//   const result = [];

//   for (let i = 0; i < intStrs.length; i++) {
//     const substring = intStrs[i].substring(s, s + l);
//     const num = parseInt(substring, 10);

//     if (num > k) {
//       result.push(num);
//     }
//   }

//   return result;
// };
// console.log(
//   solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
// );

/** 1로 만들기 */
// const solution = (num_list) => {
//   let cnt = 0;

//   for (let i of num_list) {
//     let num = i;

//     while (num !== 1) {
//       if (num % 2 === 0) {
//         num /= 2;
//       } else {
//         num -= 1;
//         num /= 2;
//

//       cnt++;
//     }
//   }
//   return cnt;
// };()
// console.log(solution([12, 4, 15, 1, 14]));

/** 숨어있는 숫자의 덧셈 */
// const solution = (my_string) => {
//   let answer = 0;

//   for (let i = 0; i < my_string.length; i++) {
//     let tem = 0;
//     while (!Number(isNaN(Number(my_string[i])))) {
//       tem += my_string[i];
//       console.log(tem);
//       i++;
//     }
//     answer += Number(tem);
//     console.log(answer);
//   }
//   return answer;
// };
// console.log(solution("aAb1B2cC34oOp"));

/** 20230611 */
/** 날짜 비교하기 */
// const solution = (date1, date2) => {
//   for (let i in date1) {
//     if (date1[i] !== date2[i]) {
//       return date1[i] < date2[i] ? 1 : 0;
//     }
//   }
//   return 0;
// };
// console.log(solution([2021, 12, 28], [2021, 12, 29]));
// console.log(solution([1024, 10, 24], [1024, 10, 24]));

/** 수열과 구간 쿼리 1 */
// const solution = (arr, queries) => {
//     for(let i in queries){
//         const [start, end] = queries[i];
//         for(let j = start; j <= end; j++){
//             arr[j] += 1;
//         }
//     }
//     return arr;
// }
// console.log(solution([0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3]]))

/** 한번만 등장한 문자 */
// const solution = (s) => {
//   let newArr = [];
//   for (let i of s) {
//     if (s.indexOf(i) === s.lastIndexOf(i)) {
//       newArr.push(i);
//     }
//   }
//   return newArr.sort().join("");
// };
// console.log(solution("abcabcadc"));

/** 세로 읽기 */
// const solution = (my_string, m, c) => {
//   //   const table = [];
//   //   let result = "";

//   //   for (let i = 0; i < Math.floor(my_string.length / m); i++) {
//   //     const row = [];
//   //     for (let j; j < m; j++) {
//   //       const cur = my_string[i + m + j];
//   //       if (i + j === c) result += cur;
//   //       row.push(cur);
//   //     }
//   //     table.push(row);
//   //   }
//   //   return result;

//   let result = "";
//   const column = c - 1;
//   const rows = Math.ceil(my_string.length / m);

//   for (let i = 0; i < rows; i++) {
//     const index = i * m + column;
//     if (index < my_string.length) {
//       result += my_string[index];
//     }
//   }

//   return result;
// };
// console.log(solution("programmers", 1, 1));

/** 이차원 배열 대각선 순회하기 */
// const solution = (board, k) => {
//   let sum = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (i + j <= k) {
//         sum += board[i][j];
//       }
//     }
//   }

//   return sum;
// };

/** 2023. 06. 18 codingTest */
/** 글자 지우기 */

// function solution(my_string, indices) {
//   return [...my_string]
//     .map((a, i) => (indices.includes(i) ? 0 : a))
//     .filter((a) => a !== 0)
//     .join("");
// }

/** 특정 문자열로 끝나는 가장 긴 문자열 찾기*/
// function solution(myString, pat) {
//   const answer = [];
//   myString.split("").forEach((a, i) => {
//     const newStr = myString.slice(0, i + 1);

//     if (newStr.endsWith(pat)) {
//       answer.push(newStr);
//     }
//   });
//   return answer.sort((a, b) => b.length - a.length)[0];
// }

/** 빈 배열에 추가 , 삭제하기 */

// function solution(arr, flag) {
//   const answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (flag[i]) {
//       answer.push(...Array(arr[i] * 2).fill(arr[i]));
//     } else {
//       answer.splice(-arr[i]);
//     }
//   }
//   return answer;
// }

/** 문자열이 몇번 등장하는지 세기 */
// function solution(myString, pat) {
//   return [...myString].reduce((acc, cur, idx) => {
//     const curStr = myString.slice(idx, pat.length + idx);
//     if (curStr === pat) return acc + 1;
//     return acc;
//   }, 0);
// }

/** 간단한 논리 연산 */
// function solution(x1, x2, x3, x4) {
//   return eval(`(${x1} || ${x2}) && (${x3} ||  ${x4})`);
// }

/** 292930619 */
/** 문자열 뒤집기 */
// function solution(my_string, s, e) {
//   return (
//     my_string.substring(0, s) +
//     my_string(s, e + 1)
//       .split("")
//       .reverse()
//       .join("") +
//     my_string.substring(e + 1)
//   );
// }
