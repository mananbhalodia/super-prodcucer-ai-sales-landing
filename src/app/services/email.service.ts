// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://process-sign-up-email-howdqmx4ma-uc.a.run.app'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  /**
   * Sends a signup email to the specified email address.
   * @param email The user's email address.
   * @returns An Observable of type string containing the response message.
   */
  sendSignupEmail(email: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other necessary headers, e.g., authorization tokens
    });

    const body = { email };

    return this.http.post<string>(this.apiUrl, body, { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Handles errors returned by the API.
   * @param error The HTTP error response.
   * @returns An Observable that throws an error message.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Sign up unsuccessful, try again.';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network errors
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else if (error.status !== 200) {
      // Server-side errors (non-200 status codes)
      errorMessage = 'Sign up unsuccessful, try again.';
    } else {
      // For cases where status is 200 but response structure is invalid
      errorMessage = 'Sign up unsuccessful, try again.';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}