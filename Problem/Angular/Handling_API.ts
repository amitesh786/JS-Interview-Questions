// RxJS: Handling API Calls with switchMap & debounceTime
// Avoid unnecessary API calls when typing in a search input.

@Component({
    selector: 'app-search',
    template: `<input type="text" (input)="search($event)" placeholder="Search..." />`,
  })
export class SearchComponent {
searchSubject = new Subject<string>();

    constructor(private http: HttpClient) {
        this.searchSubject.pipe(
        debounceTime(300), // Wait 300ms after last keystroke
        distinctUntilChanged(),
        switchMap(query => this.http.get(`https://api.example.com/search?q=${query}`))
        ).subscribe(data => console.log(data));
    }

    search(event: Event) {
        this.searchSubject.next((event.target as HTMLInputElement).value);
    }
}
// Reduces unnecessary API calls when searching.  
