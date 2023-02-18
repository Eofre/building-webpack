import "./index.html";
import "./index.scss";

function solution(string) {
  return string.replace(/\s/g, "");
}

console.log(solution("camel Casing"));
