# Printing data
When you write programs, you often need to *print* calculation *results*, text, or any other type of
*data*. Also, throughout this educational platform, you will write a lot of programs that print data
on the screen. Let's learn how to do that using a standard approach in Java.

## Displaying text using println() and print()
**Standard output** is a receiver to which a program can send information as text. It is supported by
all common *operating systems*. Java provides a special System.out object to work with the *standard
output*. We will often use it to print data.

The println method displays the passed *string* followed by a new line on the screen **(print-line)**.
For example, the following code snippet prints four lines.
```
System.out.println("I ");
System.out.println("know ");
System.out.println("Java ");
System.out.println("well.");
```
Here is the output we get:
```
I
know
Java
well.
```
All the strings were printed as they are, without double quotes.

This method allows you to print an empty line when no string is given:
```
System.out.println("Java is a popular programming language.");
System.out.println(); // prints empty line
System.out.println("It is used all over the world!");
```
And here is the output:
```
Java is a popular programming language.
It is used all over the world!
```
The print method displays the value that was passed in and places the cursor (the position where we
display a value) after it. For example, the code below outputs all strings in a single line.
```
System.out.print("I ");
System.out.print("know ");
System.out.print("Java ");
System.out.print("well.");
```
We receive the following output:
```
I know Java well.
```
Pay attention to the spaces between words. We pass them to the method for printing.

> 4 letters sout and pressing the Tab key in the IntelliJ IDEA development environment will 
> automatically write System.out.println() for you

## Printing numbers and characters
Both println and print methods allow a program to print not only strings and *characters*,
but also numbers.

Let's print two secret codes.
```
System.out.print(108);   // printing a number
System.out.print('c');   // printing a character that represents a letter
System.out.print("Q");   // printing a string
System.out.println('3'); // printing a character that represents a digit

System.out.print(22);
System.out.print('E');
System.out.print(8);
System.out.println('1');
```
Here is our output:
```
108cQ3
22E81
```
As is the case with strings, none of the printed characters contain quotes.

## Conclusion
In Java, you can print data via the standard output using the System.out object. You can use the 
println method to display the passed string in a print-line and the print method to output all 
passed strings in a single line. Both of these methods also allow for printing numbers as well as
characters.