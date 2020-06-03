const sentence = "hello there from lighthouse labs";
let delay = 50;
const runTime = delay * sentence.length;

for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char)}, delay);
  delay += 50;
}
setTimeout(() => console.log(), runTime);
