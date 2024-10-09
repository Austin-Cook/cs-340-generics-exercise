## To Run

- `npm install` to install TypeScript:
- to run dresser exercise:
  - `npx ts-node src/dresser/Dresser.ts`
- to run animal exercise: 
  - `npx ts-node src/animal/Main.ts` to run main

# Instructions

## 2 Problems

### 1) Dresser Exercise

#### Info
A dresser (the kind you keep your clothes in) contains a number of drawers. Each drawer contains a particular type of clothing. For example, here are three types of clothing you might keep in your dresser:

type Socks = { style: string; color: string }  
type Shirt = { style: string; size: string; }  
type Pants = { waist: number; length: number; }

#### Task

    Put your solution for this part of the exercise in a file named dresser.ts

    a. Write a generic Drawer class that contains one kind of clothing (we don't want to mix multiple kinds of clothing in the same drawer). Your Drawer class should have one type parameter specifying the kind of clothing in the drawer, and should have the following public methods:

    isEmpty - a get property method that returns true if the drawer is empty and false otherwise
    addItem - adds an item to the drawer on top of any other items already in the drawer
    removeItem - removes and returns the top item in the drawer, or returns undefined if the drawer is empty
    removeAll - removes and returns all items in the drawer as an array

    b. Write a generic Dresser class that contains three drawers (top, middle, and bottom), with each drawer containing a particular kind of clothing. Your Dresser class should have three type parameters that specify the kind of clothing in each drawer. The drawers should be publicly accessible.

    c. Write a function that demonstrates the functionality of your Dresser and Drawer classes.

### 2) Animal Exercise

#### Info

This code takes a list of animals, either dogs or cats, and outputs some data on them. See results.md for what the output should look like.


#### Task

    The task is to implement generics by separating the get[animal]trainingprioritylist and get[animal]sorted functions into generic functions located in the Animal class.
    To simplify things, create these functions as static. Else, an instance of Animal will have to be newed up to call the forementioned functions.

Question: What is the advantage of using function<T extends Animal>(param: T[]) instead of function(param: Animal[])?  
Answer: It provides more flexibility. For example, `getAnimalsSorted()` is able to return a Cat[] or Dog[] rather than just an Animal[], which would require casting after getting the array back.

