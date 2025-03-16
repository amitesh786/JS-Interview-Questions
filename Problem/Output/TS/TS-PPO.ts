// Question: Demonstrate the use of Partial, Pick, and Omit in TypeScript.

interface Employee {
    id: number;
    name: string;
    role: string;
}

// Partial - Makes all properties optional
type PartialEmployee = Partial<Employee>;

// Pick - Picks specific properties
type PickedEmployee = Pick<Employee, "id" | "name">;

// Omit - Removes specific properties
type OmittedEmployee = Omit<Employee, "role">;

// Example usage
const emp1: PartialEmployee = { name: "Alice" };
const emp2: PickedEmployee = { id: 101, name: "Bob" };
const emp3: OmittedEmployee = { id: 102, name: "Charlie" };
