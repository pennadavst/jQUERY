let quotes = [
  {
    quote:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: " Dr. Suess"
  },
  {
    quote:
      "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    author: " Marilyn Monroe"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: " Stephen King"
  },
  {
    quote:
      "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: " Mark Caine"
  },
  {
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: " Helen Keller"
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: " Mark Twain"
  },
  {
    quote:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: " Audre Lorde"
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: " Eleanor Roosevelt"
  },
  {
    quote:
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: " David Brinkley"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy"
  }
];

const $btn = $("#btn");
$btn.click(function() {
  let number = Math.floor(Math.random() * quotes.length);
  $("#quote").html('<span>"</span>' + quotes[number].quote + '<span>"</span>');
  $("#author").html("<span>--</span>" + quotes[number].author);
});
