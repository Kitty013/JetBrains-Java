# Array exceptions

No wonder that different types of exceptions may occur when your program processes an array. To 
avoid them, you should be aware of the situations where you are at risk of having one and stick to
a set of commonly used practices. Now let's learn what exactly we are dealing with here.

## NullPointerException
As you probably know by now, an array is a reference type, which means its variable can be null , 
and that may lead to NPE.
```
int[] numbers = null;
int size = numbers.length; // It throws an NPE
```
We will not dwell on this since we suppose that you are already familiar with NPEs and how to avoid
them by using additional checks in your code:
```
int size = numbers == null ? 0 : numbers.length;
```

## NegativeArraySizeException
If you try to create an array with a negative size, your code will compile successfully, but this line
will throw a NegativeArraySizeException while executing.
```
int negSize = -1;
int[] numbers = new int[negSize]; // an exception here
```
It's not very likely that you'll face this exception as a developer, but it makes sense to keep it
in mind. To avoid it, simply do not use variables that can have a negative size when setting the size 
of an array.

An array may have a size greater than or equal to zero. If this is the case, the code will compile
successfully and will not throw a NegativeArraySizeException at runtime.

## ArrayIndexOutOfBoundsException
This is a fairly common exception that occurs while working with arrays. It is caused by attempting 
to access a non-existent element of the array.
```
int[] array = { 1, 2, 3 }; // an array of ints

int n1 = array[2]; // n1 is 3
int n2 = array[3]; // Exception
```
In this code, the last line produces an ArrayIndexOutOfBoundsException since the last index of the 
array in question is 2.

The code will throw the same exception if we try to access an element with a negative index:
```
array[0];  // OK
array[-1]; // Exception
```
Since a string can be considered as a sequence of characters, a similar exception may occur when 
accessing a non-existing element of a string. It is called StringIndexOutOfBoundsException.
To avoid the ArrayIndexOutOfBoundsException, we may check if the given index belongs to the interval
\[0, length ? 1].

For example, let's take a look at a program, displaying an element of the array by the index, 
provided in the input. If the index is out of bounds, the program prints a message instead of 
throwing an exception.
```
public class NoIndexOutOfBoundsExceptions {

    public static void main(String[] args) {
        int[] hardCodedArray = { 3, 2, 4, 5, 1 };

        Scanner scanner = new Scanner(System.in);

        int index = scanner.nextInt();

        if (index < 0 || index > hardCodedArray.length - 1) {
            System.out.println("The index is out of bounds.");
        } else {
            System.out.println(hardCodedArray[index]);
        }
    }
}
```
Here are some possible inputs and the corresponding outputs of the program:
```
the index is 0, the program outputs "3";
the index is 1, the program outputs "2";
the index is 4, the program outputs "1";
the index is -1, the program outputs "The index is out of bounds.";
the index is 5, the program also outputs "The index is out of bounds.".
That is how we can avoid ArrayIndexOutOfBoundsExceptions by using a conditional statement and the length property of an array.
```

## Conclusion
We have considered three types of array exceptions:
- NullPointerException;
- NegativeArraySizeException which you may face when you are creating an array with a negative size;
- ArrayIndexOutOfBoundsException which occurs when you try to access a non-existent element.

As a developer, you need to keep in mind what exceptions you may face and, of course, basic ways to
avoid them.
