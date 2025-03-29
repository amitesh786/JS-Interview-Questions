// ReversePipe

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
        return value.split('').reverse().join('');
    }
}

// <p>{{ 'hello' | reverse }}</p>
// Output: olleh

// The ReversePipe is a custom Angular pipe that takes a string as input and 
// returns the reversed version of the string.

// Pipe: This decorator is used to define a custom pipe in Angular.
// PipeTransform: This interface ensures that our class implements the transform method, which is required for any pipe.

// It takes an input value (value: string) and returns a modified value.

// value.split('') → Converts the string into an array of characters.
// .reverse() → Reverses the order of characters in the array.
// .join('') → Converts the array back into a string.
