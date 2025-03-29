// Making Multiple API Calls in Parallel

forkJoin({
    users: this.http.get('/api/users'),
    posts: this.http.get('/api/posts')
}).subscribe(response => {
    console.log(response.users, response.posts);
});

// The forkJoin() operator in RxJS allows you to execute
// multiple HTTP requests in parallel and wait for all of them to complete before proceeding.

// Example:
// GET /api/users → [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
// GET /api/posts → [{ id: 101, title: 'Post 1' }, { id: 102, title: 'Post 2' }]

// Output
// [
//     { "id": 1, "name": "Alice" },
//     { "id": 2, "name": "Bob" }
// ]
// [
//     { "id": 101, "title": "Post 1" },
//     { "id": 102, "title": "Post 2" }
// ]
