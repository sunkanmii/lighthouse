/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const IS_ARRAY = {};

/**
 * Expected Lighthouse audit values for sites with various errors.
 */
module.exports = [
  {
    lhr: {
      requestedUrl: 'http://localhost:10200/infinite-loop.html',
      finalUrl: 'http://localhost:10200/infinite-loop.html',
      runtimeError: {code: 'PAGE_HUNG'},
      audits: {
        'first-contentful-paint': {
          scoreDisplayMode: 'error',
          errorMessage: 'Required traces gatherer did not run.',
        },
      },
    },
    artifacts: {
      PageLoadError: {code: 'PAGE_HUNG'},
      devtoolsLogs: {
        'pageLoadError-defaultPass': IS_ARRAY,
      },
      traces: {
        'pageLoadError-defaultPass': {traceEvents: IS_ARRAY},
      },
    },
  },
  {
    lhr: {
      requestedUrl: 'https://expired.badssl.com',
      finalUrl: 'https://expired.badssl.com/',
      runtimeError: {code: 'INSECURE_DOCUMENT_REQUEST'},
      audits: {
        'first-contentful-paint': {
          scoreDisplayMode: 'error',
          errorMessage: 'Required traces gatherer did not run.',
        },
      },
    },
    artifacts: {
      PageLoadError: {code: 'INSECURE_DOCUMENT_REQUEST'},
      devtoolsLogs: {
        'pageLoadError-defaultPass': IS_ARRAY,
      },
      traces: {
        'pageLoadError-defaultPass': {traceEvents: IS_ARRAY},
      },
    },
  },
];
