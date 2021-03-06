/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { ExtensionRef } from '@alfresco/adf-extensions';
import { AppExtensionService } from '../../extensions/extension.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-about-page',
    templateUrl: './about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent {
    extensionColumns: string[] = ['$id', '$name', '$version', '$vendor', '$license', '$runtime', '$description'];
    extensions$: Observable<ExtensionRef[]>;

    constructor(appExtensions: AppExtensionService) {
        this.extensions$ = appExtensions.references$;
    }
}
