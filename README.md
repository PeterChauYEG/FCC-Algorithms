# FCC Algorithms

## Purpose

This is an algorithm guide for use at the April 2016 Coffee-and-Code in Edmonton, Alberta. We will work through these together.

## Getting Started the easy way

1. Clone this repo with:
    a. `git clone https://github.com/PeterChauYEG/FCC-Algorithms.git` 
    b. clone on [c9](https://c9.io/c/JVUChbVycba) with `https://github.com/PeterChauYEG/FCC-Algorithms.git` (remember to select a node app!)   

![clone on c9](http://res.cloudinary.com/dqza9dw1h/image/upload/v1459491250/fcc/clone-on-c9.png)
 
2. Go into the `challenge/` with `cd challenge`
3. Run a challenge to make sure it works with `node wheredoibelong.js`. You should get `50`.
4. Open `wheredoibelong.js` and lets get started.

## [Where do i belong](https://www.freecodecamp.com/challenges/where-do-i-belong)

### What do we want to do?

**Return** the **lowest index** at which a value (**second argument**) should be **inserted** into an array (**first argument**) once it has been **sorted**.

### Lets break that down

1. **Sort** the first argument (_array_) from lowest to highest
2. **Compare** the second argument with each element of the sorted array:
    a. Is any element larger than it? Add 1 to the length of the array.
    b. Is the element is greater than or equal to it? Remember the index
4. **Return** the index (remember to turn it into a number)
 
Run the solution with `node wheredoibelong.js`
