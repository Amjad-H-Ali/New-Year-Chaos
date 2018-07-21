# New-Year-Chaos

###### It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to _n_ at the back.

###### Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if _n_ = 8 and _Person_ 5 bribes _Person_ 4, the queue will look like this: 1,2,3,4,5,6,7,8.

###### Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

##### Function Description

###### Complete the function _minimumBribes_ in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

###### minimumBribes has the following parameter(s):

###### • q: an array of integers

##### Input Format

###### The first line contains an integer _t_, the number of test cases.

###### Each of the next _t_ pairs of lines are as follows: 
###### - The first line contains an integer _t_, the number of people in the queue 
###### - The second line has _n_ space-separated integers describing the final state of the queue.

##### Constraints

###### • 1 ≤ _t_ ≤ 10

###### • 1 ≤ _n_ ≤ 10 <sup>5</sup>

##### Subtasks

###### For 60% score 1 ≤ _n_ ≤ 10 <sup>3</sup> 

###### For 100% score 1 ≤ _n_ ≤ 10 <sup>5</sup>

##### Output Format

###### Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than 2 people.

##### Sample Input

```
2
5
2 1 5 3 4
5
2 5 1 3 4
```

##### Sample Output

```
3
Too chaotic
```

##### Explanation

##### Test Case 1

###### The initial state:

![queue 1](img/queue1.png)

###### After person 5 moves one position ahead by bribing person 4:

![queue 2](img/queue2.png)

###### Now person 5 moves another position ahead by bribing person 3:

![queue 3](img/queue3.png)

###### And person 2 moves one position ahead by bribing person 2:

![queue 4](img/queue4.png)

###### So the final state is 2,1,5,3,4 after three bribing operations.

##### Test Case 2

###### No person can bribe more than two people, so its not possible to achieve the input state.
