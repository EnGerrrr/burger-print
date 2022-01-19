import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '@/_configs/app.config';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    register(user) {
        return this.http.post(`${AppConfig.aspApiUrl}/register`, user);
    }
}
