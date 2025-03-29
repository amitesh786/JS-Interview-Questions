//  HTTP Interceptor (Global API Request Handling)

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'Bearer my-secret-token';
    const clonedReq = req.clone({ setHeaders: { Authorization: authToken } });
    return next.handle(clonedReq);
  }
}

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class AppModule {}

// Adds authentication token to every API request.
