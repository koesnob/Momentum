const quotes = [
  {
    quote: `"Strength no weakness! Have to had that mind set. Don't put yourself down."`,
    author: "Demarjay Smith",
  },
  {
    quote: '"뭐든지 진짜가 되려거든 목숨을 걸고 목숨을 걸고……"',
    author: "이광용",
  },
  {
    quote:
      '"Do not be hard. Nine found no interest, one of them will be pleased"',
    author: "Louis Colts",
  },
  {
    quote:
      '"Being micro ambitious, put your head down and work with pride on whatever is in front of you."',
    author: "Tim Minchin",
  },
  {
    quote:
      '"나는 한 가지 문제를 택하면 처음부터 남보다 두세 배의 시간을 들일 각오로 시작한다. 그것이 보통 두뇌를 가진 인간이 할 수 있는 유일한 최선의 방법이라고 믿고 있다."',
    author: "히로나카 헤이스케",
  },
  {
    quote:
      '"My heart is at ease knowing that, what was meant for me will never miss me, and that what misses me was never meant for me."',
    author: "AI-Shafi",
  },
  {
    quote: `"우리가 질문해야할 것은 '삶이 어떤의미가 있냐'가 아니라 '내가 삶에 어떤 의미를 부여할 것인가'이다."`,
    author: "유시민",
  },
  {
    quote: '"Always go little further into the water."',
    author: "David Bowie",
  },
  {
    quote: '"God placed the best things in life on the other side of terror."',
    author: "Will Smith",
  },
  {
    quote: '"That which does not kill us makes us stronger."',
    author: "Friedrich Nietzsche",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;
