import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '@/_configs/app.config';


@Injectable({ providedIn: 'root' })
export class UploadService {

    constructor(
        private http: HttpClient,
    ) { }

    makeFileRequest(file, urlReq = 'storev2', userId) {
        const formData = new FormData();
        formData.append('uploads[]', file.data, file.data.name);
        formData.append('user_id', userId);
        formData.append('type', 'mockup');
        const url = AppConfig.ispApiUrl + `/${urlReq}`;
        return this.http.post<any>(url, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }

    makeFileRequestAllOverPrint(file, type: string, width: number, height: number, urlReq: string = 'storev2', baseId, userId) {
        const formData = new FormData();
        formData.append('uploads[]', file, file.name);
        formData.append('type', type);
        formData.append('width', width + '');
        formData.append('height', height + '');
        formData.append('base_id', baseId);
        formData.append('user_id', userId);

        const url = AppConfig.ispApiUrl + `/${urlReq}`;
        return this.http.post<any>(url, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
}