[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Side Note: I can't figure out why the test is failing but any array I try seems to sort correctly

I now think that the worst case scenario based on my code would revolve around the pivot method. Thinking about it, I realized that if the pivot chosen resulted in the algorithm only swapping one of the elements for every iteration, then there would be an iteration for every item in the array. So usually the standard quicksort has the time complexity of $\Theta(n^{2})$, but that is already the same as when you have to reiterate for every element in the list. So I believe the bound to $\Theta(n^{2})$.


