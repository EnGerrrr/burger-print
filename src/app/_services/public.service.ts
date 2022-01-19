import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '@/_configs/app.config';

@Injectable({ providedIn: 'root' })
export class PublicService {
    constructor(private http: HttpClient) { }
}