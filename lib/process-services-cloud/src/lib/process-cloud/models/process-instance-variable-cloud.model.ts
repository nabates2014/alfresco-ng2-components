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

import { RestVariable } from 'alfresco-js-api';

export class ProcessInstanceVariableCloud implements RestVariable {
    name: string;
    scope: string;
    type: string;
    value: string;
    valueUrl: string;

    constructor(obj?: any) {
        this.name = obj && obj.name ? obj.name : null;
        this.scope = obj && obj.scope ? obj.scope : null;
        this.value = obj && obj.value ? obj.value : null;
        this.valueUrl = obj && obj.valueUrl ? obj.valueUrl : null;
    }
}
