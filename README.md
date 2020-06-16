# codescreen

Navigate to the root directly. 
Ensure you have installed and are running node 8 or 10 and above. 
Run `yarn`, then run `yarn test`. 

When your tests are passing submit your solutions.

Code needs to be written in javascript. 
We prefer ES6 over ES5.
We prefer functional over classes.
We prefer tests over no tests.

--------------------------------------------------------------------------------

### 1.

Here is a data structure: 

```
{
  name: ‘Mary’
    pet: {
      name: ‘Ringo’,
      kid: {
        name: ‘Tia’,
        owner: {
          name: ‘Tim’
        }
      }
    }
}
```

Mary is a breeder. She has a pet called Ringo. Ringo is the father of a puppy called Tia. Tia is owned by Tim.
In this data structure, any nested object can be undefined. That is for example, Mary may have no pet, Ringo may have no kid, Tia may have no owner.

Requirements:

Write a function or functions to retrieve a value according to a path. If any of the nested object is undefined, the result will be undefined.

For example:
 given path `[‘pet’, ‘kid’, ‘name’]`, the result will be `‘Tia’`;
 given path `[‘pet’, ‘kid’, ‘owner’]`, the result will be `{name: ‘Time’}`;
 given path `[‘pet’, ‘owner’]`, the result will be undefined since owner is not directly under `‘pet’`.

--------------------------------------------------------------------------------

### 2.

Given a ES6 function like below:

```
const add = (a, b, c) => a + b + c;
```

write a function named ‘cu’ to take the ‘add’ function as its argument:

```
const cu = (fn) => …

const cuAdd = cu(add);
```

that the following will be evaluated to true.

```
cuAdd(1, 2, 3) === 6
cuAdd(1)(2, 3) === 6
cuAdd(1, 2)(3) === 6
cuAdd(1)(2)(3) === 6
```
--------------------------------------------------------------------------------
