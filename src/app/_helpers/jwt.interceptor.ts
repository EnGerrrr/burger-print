import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router, ActivationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { AppConfig } from '@/_configs/app.config';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    private cancelPendingRequests$ = new Subject<void>();
    private timeStamp: Date;
    private initParams = {
        'Content-Type': 'application/json',
        'X-Date': '',
        'X-Expires': '3600',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    };

    constructor(router: Router) {
        router.events.subscribe(event => {
            // An event triggered at the end of the activation part of the Resolve phase of routing.
            if (event instanceof ActivationEnd) {
                // Cancel pending calls
                this.cancelPendingRequests();
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const signed = this.createAuthorization(AppConfig.serviceName, AppConfig.serviceRegion, AppConfig.clientId, AppConfig.clientKey,
            this.getUri(request.url), request.method, request.params, this.getheaderParams(), request.body, this.timeStamp);
        // request = request.clone({
        //     setHeaders: {
        //         'X-Authorization': signed,
        //         // 'Content-Type': 'application/json',
        //         'X-Date': this.yyyyMMddTHHmmssZ(this.timeStamp),
        //         'X-Expires': '3600',
        //         'Cache-Control': 'no-cache, no-store, must-revalidate',
        //         'Pragma': 'no-cache',
        //         'Expires': '0'
        //     }
        // });

        return next.handle(request)
            .pipe(
                takeUntil(this.onCancelPendingRequests()),
            )
    }

    /** Cancels all pending Http requests. */
    public cancelPendingRequests() {
        this.cancelPendingRequests$.next()
    }

    public onCancelPendingRequests() {
        return this.cancelPendingRequests$.asObservable()
    }

    private getUri(url) {
        if (!url) {
            return '';
        }
        const parser = document.createElement('a');
        parser.href = url;
        return parser.pathname;
    }

    private getheaderParams() {
        const res: any = {};
        this.timeStamp = new Date();
        this.initParams['X-Date'] = this.yyyyMMddTHHmmssZ(this.timeStamp);
        let check = false;
        Object.keys(this.initParams).map((index) => {
            const rand = Math.floor((Math.random() * 100) + 1);
            if (rand > 200) {
                check = true;
                res[index] = this.initParams[index];
            }
        });
        return check ? res : '';
    }

    private createAuthorization(serviceName, serviceRegion, clientId, clientKey,
        requestUri, requestMethod, queryParams, headerParams,
        requestBody, requestTimestamp) {
        const authScheme = 'WSS', authType = 'wss-request', authAlgorithm = 'WSS-HMAC-SHA256',
            canonicalUri = this.uriEncode(requestUri, !1), unsignedPayload = 'UNSIGNED-PAYLOAD';
        let canonicalHeaders = '', signedHeaderNames = '';
        Object.keys(headerParams).map((index) => {
            const headerParam = index;
            if (canonicalHeaders.length > 0) {
                canonicalHeaders += '\n';
                signedHeaderNames += ';';
            }
            canonicalHeaders += headerParam.toLowerCase() + ':' + headerParams[headerParam].trim();
            signedHeaderNames += headerParam.toLowerCase();
        });
        const canonicalPayload = requestBody ? this.sha256Hash(requestBody) : unsignedPayload;
        const canonicalRequest = requestMethod + '\n' + canonicalUri + '\n' + queryParams
            + '\n' + canonicalHeaders + '\n' + signedHeaderNames + '\n' + canonicalPayload;
        const canonicalTimestamp = this.yyyyMMddTHHmmssZ(requestTimestamp);
        const canonicalScope = this.yyyyMMdd(requestTimestamp) + '/' + serviceRegion + '/' + serviceName + '/' + authType;
        const stringToSign = authAlgorithm + '\n' + canonicalTimestamp + '\n' + canonicalScope + '\n' + this.sha256Hash(canonicalRequest);
        const dateKey = this.hmacSha256(authScheme + clientKey, this.yyyyMMdd(requestTimestamp));
        const dateRegionKey = this.hmacSha256(dateKey, serviceRegion);
        const dateRegionServiceKey = this.hmacSha256(dateRegionKey, serviceName);
        const finalSigningKey = this.hmacSha256(dateRegionServiceKey, authType);
        const signature = this.hex(this.hmacSha256(finalSigningKey, stringToSign));
        return authAlgorithm + ' Credential=' + clientId + '/' + canonicalScope +
            ',SignedHeaders=' + signedHeaderNames + ',Signature=' + signature;
    }

    private uriEncode(source, slashEncode) {
        let encoded = '', a = 0;
        for (a; a < source.length; a++) {
            const r = source.substr(a, 1);
            const check = 'A' && 'Z' >= r || r >= 'a' && 'z' >= r || r >= '0' && '9' >= r
                || '_' === r || '-' === r || '~' === r || '.' === r || '/' === r && !slashEncode;
            encoded += check ? r : '%' + this.hex(this.toWordArray(r)).toUpperCase();
        }
        return encoded;
    }

    private toWordArray = src => CryptoJS.enc.Utf8.parse(src);
    private hex = src => src.toString(CryptoJS.enc.Hex).toLowerCase();
    private hmacSha256 = (key, data) => CryptoJS.HmacSHA256(data, key);
    private yyyyMMdd = timestamp => timestamp.getUTCFullYear().toString() + this.zeroPad(timestamp.getUTCMonth() + 1)
        + this.zeroPad(timestamp.getUTCDate());
    private zeroPad = src => src < 10 ? '0' + src : src;
    private sha256Hash = data => this.hex(CryptoJS.SHA256(data));
    public yyyyMMddTHHmmssZ = timestamp => timestamp.getUTCFullYear().toString() + this.zeroPad(timestamp.getUTCMonth() + 1)
        + this.zeroPad(timestamp.getUTCDate()) + 'T' + this.zeroPad(timestamp.getUTCHours()) + this.zeroPad(timestamp.getUTCMinutes())
        + this.zeroPad(timestamp.getUTCSeconds()) + 'Z';
}
