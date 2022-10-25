
const sentence = "hello there from lighthouse labs";
let incrementer = 0;

for (const char of sentence) {

  incrementer += 50;
  setTimeout(() => {
    process.stdout.write(char);

  }, incrementer);
}

setTimeout(() => {
  process.stdout.write("\n");

}, incrementer + 50);
