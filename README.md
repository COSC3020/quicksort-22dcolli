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

Anyways, we learned that the worst case for quicksort is when the items are in reversed order. For the standard quicksort the time complexity is $\Theta(log(n^{2}))$, and in the worst case we would have to go through every single element doing the most amount of work. So I think that that would mean the runtime would remain $\Theta(log(n^{2}))$


