$(document).ready(function () {
  let quotes = [
    "Success starts with self-discipline.",
    "Never give up.",
    "Dream big and dare to fail.",
    "Small progress is still progress.",
    "Believe in yourself.",
    "Above all, don't lie to yourself.",
    "To think too much is a disease.",
    "To live without hope is to cease to live.",
    "The soul is healed by being with children.",
    "What is hell? I maintain that it is the suffering of being unable to love.",
    "Beauty will save the world.",
    "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
    "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
    "Man only likes to count his troubles; he doesn't calculate his happiness.",
    "It takes something more than intelligence to act intelligently.",
  ];

  let randomIndex = Math.floor(Math.random() * quotes.length);

  $("#quote").text(quotes[randomIndex]);
});
