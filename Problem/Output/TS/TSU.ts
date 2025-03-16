// Question: Implement a TypeScript function using a discriminated union to handle different shapes.

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
    }
}

// Example usage
console.log(getArea({ kind: "circle", radius: 5 })); // Output: 78.54
console.log(getArea({ kind: "square", side: 4 })); // Output: 16
