/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace indexing_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  /**
   * Indexing API
   *
   * The Indexing API allows developers to share the life cycle of a Web
   * Document with Google.
   *
   * @example
   * const {google} = require('googleapis');
   * const indexing = google.indexing('v3');
   *
   * @namespace indexing
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Indexing
   */
  export class Indexing {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    urlNotifications: Resource$Urlnotifications;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.urlNotifications = new Resource$Urlnotifications(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Output for PublishUrlNotification
   */
  export interface Schema$PublishUrlNotificationResponse {
    /**
     * Description of the notification events received for this URL.
     */
    urlNotificationMetadata?: Schema$UrlNotificationMetadata;
  }
  /**
   * `UrlNotification` is the resource used in all Indexing API calls. It
   * describes one event in the life cycle of a Web Document.
   */
  export interface Schema$UrlNotification {
    /**
     * Creation timestamp for this notification. Users should _not_ specify it,
     * the field is ignored at the request time.
     */
    notifyTime?: string;
    /**
     * The URL life cycle event that Google is being notified about.
     */
    type?: string;
    /**
     * The object of this notification. The URL must be owned by the publisher
     * of this notification and, in case of `URL_UPDATED` notifications, it
     * _must_ be crawlable by Google.
     */
    url?: string;
  }
  /**
   * Summary of the most recent Indexing API notifications successfully
   * received, for a given URL.
   */
  export interface Schema$UrlNotificationMetadata {
    /**
     * Latest notification received with type `URL_REMOVED`.
     */
    latestRemove?: Schema$UrlNotification;
    /**
     * Latest notification received with type `URL_UPDATED`.
     */
    latestUpdate?: Schema$UrlNotification;
    /**
     * URL to which this metadata refers.
     */
    url?: string;
  }


  export class Resource$Urlnotifications {
    root: Indexing;
    constructor(root: Indexing) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * indexing.urlNotifications.getMetadata
     * @desc Gets metadata about a Web Document. This method can _only_ be used
     * to query URLs that were previously seen in successful Indexing API
     * notifications. Includes the latest `UrlNotification` received via this
     * API.
     * @alias indexing.urlNotifications.getMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.url URL that is being queried.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMetadata(
        params?: Params$Resource$Urlnotifications$Getmetadata,
        options?: MethodOptions): AxiosPromise<Schema$UrlNotificationMetadata>;
    getMetadata(
        params: Params$Resource$Urlnotifications$Getmetadata,
        options: MethodOptions|
        BodyResponseCallback<Schema$UrlNotificationMetadata>,
        callback: BodyResponseCallback<Schema$UrlNotificationMetadata>): void;
    getMetadata(
        params: Params$Resource$Urlnotifications$Getmetadata,
        callback: BodyResponseCallback<Schema$UrlNotificationMetadata>): void;
    getMetadata(callback: BodyResponseCallback<Schema$UrlNotificationMetadata>):
        void;
    getMetadata(
        paramsOrCallback?: Params$Resource$Urlnotifications$Getmetadata|
        BodyResponseCallback<Schema$UrlNotificationMetadata>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UrlNotificationMetadata>,
        callback?: BodyResponseCallback<Schema$UrlNotificationMetadata>):
        void|AxiosPromise<Schema$UrlNotificationMetadata> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Urlnotifications$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlnotifications$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/urlNotifications/metadata')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UrlNotificationMetadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UrlNotificationMetadata>(parameters);
      }
    }


    /**
     * indexing.urlNotifications.publish
     * @desc Notifies that a URL has been updated or deleted.
     * @alias indexing.urlNotifications.publish
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().UrlNotification} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    publish(
        params?: Params$Resource$Urlnotifications$Publish,
        options?: MethodOptions):
        AxiosPromise<Schema$PublishUrlNotificationResponse>;
    publish(
        params: Params$Resource$Urlnotifications$Publish,
        options: MethodOptions|
        BodyResponseCallback<Schema$PublishUrlNotificationResponse>,
        callback: BodyResponseCallback<Schema$PublishUrlNotificationResponse>):
        void;
    publish(
        params: Params$Resource$Urlnotifications$Publish,
        callback: BodyResponseCallback<Schema$PublishUrlNotificationResponse>):
        void;
    publish(callback:
                BodyResponseCallback<Schema$PublishUrlNotificationResponse>):
        void;
    publish(
        paramsOrCallback?: Params$Resource$Urlnotifications$Publish|
        BodyResponseCallback<Schema$PublishUrlNotificationResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PublishUrlNotificationResponse>,
        callback?: BodyResponseCallback<Schema$PublishUrlNotificationResponse>):
        void|AxiosPromise<Schema$PublishUrlNotificationResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Urlnotifications$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlnotifications$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/urlNotifications:publish')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PublishUrlNotificationResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$PublishUrlNotificationResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Urlnotifications$Getmetadata {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * URL that is being queried.
     */
    url?: string;
  }
  export interface Params$Resource$Urlnotifications$Publish {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$UrlNotification;
  }
}
