# Increment and decrement
In this topic, we will discuss one of the most famous *operations* in programming: **increment**.
It is used in many programming languages, including Java, to increase a *variable* by one. Fun
fact: the name of the C++ programming language is a reference to this operation, signifying the
evolutionary nature of the changes from C.

## Using ++ and -- in Java
Java has two opposite operations called **increment (++)** and **decrement (--)**, which increase
or decrease the value of a variable by one.
```
int n = 10;
n++; // 11
n--; // 10
```
The code above is equivalent to the code below.
```
int n = 10;
n += 1; // 11
n -= 1; // 10
```

## Prefix and postfix forms
Both increment and decrement operators have two forms, which are very important when using the
result in the current statement:
- the **prefix** form **(++n or --n)** increases or decreases the value of a variable before it
is used;
- the **postfix** form **(n++ or n--)** increases or decreases the value of a variable after it
is used.

The following examples demonstrate both forms of increment.

## Prefix increment:
```
int a = 4;
int b = ++a;

System.out.println(a); // 5
System.out.println(b); // 5
```
In this case, the value of <mark>a</mark> has been incremented and then assigned to <mark>b</mark>.
So, <mark>b</mark> is 5.

## Postfix increment:
```
int a = 4;
int b = a++;

System.out.println(a); // 5
System.out.println(b); // 4
```
In Java, the postfix operator has higher *precedence* than the *assignment operator*. However, it
returns the original value of <mark>a</mark>, not the incremented one. That's why when we assign
<mark>a++</mark> to <mark>b</mark>, we actually assign 4, and then variable <mark>a</mark> is
incremented. So, <mark>b</mark> is 4 and <mark>a</mark> is 5.

If that's still not clear enough for you, take a look at the code:
```
int a = 4;
System.out.println(a++ + a); // this is 9
```
We hope that now you fully understand the increment and decrement operations and their prefix and
postfix forms.

## Conclusion
Congratulations, you've just learned the fundamental operations in Java: increment (++) and 
decrement (--). These operations can be used in two forms: prefix (++n or --n), which modifies the
value before its use in a statement, and postfix (n++ or n--), which modifies it after. Grasping
these operations is vital due to their widespread use in many aspects of programming.
