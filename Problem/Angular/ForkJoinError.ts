// Handling Partial Failures Gracefully
// By catching errors for individual requests,
// we can return default values when an API fails.

import { catchError, of } from 'rxjs';

forkJoin({
    users: this.http.get('/api/users').pipe(catchError(() => of([]))),
    posts: this.http.get('/api/posts').pipe(catchError(() => of([])))
}).subscribe(response => {
    console.log(response.users, response.posts);
});

// Fix: Using catchError() for each request
// The forkJoin() operator in RxJS allows you to execute
// multiple HTTP requests in parallel and wait for all of them to complete before proceeding.

// Now if an API call fails(posts), an empty array ([]) is returned instead of breaking everything.
// Prevents the application from crashing due to API errors.

// Example:
// GET /api/users → [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
// GET /api/posts → []

// Output
// [
//     { "id": 1, "name": "Alice" },
//     { "id": 2, "name": "Bob" }
// ]
// []
