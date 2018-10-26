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

import Util = require('../../util/util');
import TestConfig = require('../../test.config');
import { element, by, browser } from 'protractor';
import { ProcessServicesPage } from './process_services/processServicesPage';

export class NavigationBarPage {

    contentServicesButton = element(by.css('a[data-automation-id="Content Services"]'));
    taskListButton = element(by.css("a[data-automation-id='Task List']"));
    configEditorButton = element(by.css('a[data-automation-id="Configuration Editor"]'));
    processServicesButton = element(by.css('a[data-automation-id="Process Services"]'));
    loginButton = element(by.css('a[data-automation-id="Login"]'));
    trashcanButton = element(by.css('a[data-automation-id="Trashcan"]'));
    overlayViewerButton = element(by.css('a[data-automation-id="Overlay Viewer"]'));
    userProfileButton = element(by.css('button[data-automation-id="adf-user-profile"]'));
    themeButton = element(by.css('button[data-automation-id="theme menu"]'));
    themeMenuContent = element(by.css('div[class*="mat-menu-panel"]'));
    logoutButton = element(by.css('a[adf-logout]'));
    cardViewButton = element(by.cssContainingText('.sidenav-menu-label', 'CardView'));
    languageMenuButton = element(by.css('button[data-automation-id="language-menu-button"]'));
    appTitle = element(by.css('.adf-app-title'));
    headerDataButton = element(by.css('a[data-automation-id="Header Data"]'));
    menuButton = element(by.css('button[data-automation-id="adf-menu-icon"]'));
    formButton = element(by.css('a[data-automation-id="Form"]'));

    clickContentServicesButton() {
        Util.waitUntilElementIsVisible(this.contentServicesButton);
        this.contentServicesButton.click();
    }

    clickTaskListButton() {
        Util.waitUntilElementIsVisible(this.taskListButton);
        this.taskListButton.click();
    }

    clickConfigEditorButton() {
        Util.waitUntilElementIsVisible(this.configEditorButton);
        this.configEditorButton.click();
    }

    navigateToProcessServicesPage() {
        Util.waitUntilElementIsVisible(this.processServicesButton);
        this.processServicesButton.click();
        return new ProcessServicesPage();
    }

    clickLoginButton() {
        Util.waitUntilElementIsVisible(this.loginButton);
        this.loginButton.click();
    }

    clickTrashcanButton() {
        Util.waitUntilElementIsVisible(this.trashcanButton);
        this.trashcanButton.click();
    }

    clickOverlayViewerButton() {
        Util.waitUntilElementIsVisible(this.overlayViewerButton);
        this.overlayViewerButton.click();
        return this;
    }

    clickUserProfile() {
        Util.waitUntilElementIsVisible(this.userProfileButton);
        this.userProfileButton.click();
    }

    clickThemeButton() {
        Util.waitUntilElementIsVisible(this.themeButton);
        this.themeButton.click();
        Util.waitUntilElementIsVisible(this.themeMenuContent);
    }

    clickOnSpecificThemeButton(themeName) {
        let themeElement = element(by.css(`button[data-automation-id="${themeName}"]`));
        Util.waitUntilElementIsVisible(themeElement);
        Util.waitUntilElementIsClickable(themeElement);
        themeElement.click();
    }

    clickLogoutButton() {
        Util.waitUntilElementIsVisible(this.logoutButton);
        this.logoutButton.click();
    }

    clickCardViewButton() {
        Util.waitUntilElementIsVisible(this.cardViewButton);
        this.cardViewButton.click();
    }

    openContentServicesFolder(folderId) {
        return browser.get(TestConfig.adf.url + '/files/' + folderId);
    }

    chooseLanguage(language) {
        let buttonLanguage = element(by.xpath(`//adf-language-menu//button[contains(text(), '${language}')]`));
        Util.waitUntilElementIsVisible(buttonLanguage);
        buttonLanguage.click();
    }

    openLanguageMenu() {
        Util.waitUntilElementIsVisible(this.languageMenuButton);
        this.languageMenuButton.click();
        Util.waitUntilElementIsVisible(this.appTitle);
    }

    clickHeaderDataButton() {
        Util.waitUntilElementIsVisible(this.headerDataButton);
        Util.waitUntilElementIsClickable(this.headerDataButton);
        return this.headerDataButton.click();
    }

    checkMenuButtonIsDisplayed() {
        return Util.waitUntilElementIsVisible(this.menuButton);
    }

    checkMenuButtonIsNotDisplayed() {
        return Util.waitUntilElementIsNotVisible(this.menuButton);
    }

    checkToolbarColor(color) {
        let toolbarColor = element(by.css(`mat-toolbar[class*="mat-${color}"]`));
        return Util.waitUntilElementIsVisible(toolbarColor);
    }

    clickAppLogo(logoTitle) {
        let appLogo = element(by.css('a[title="' + logoTitle + '"]'));
        Util.waitUntilElementIsVisible(appLogo);
        appLogo.click();
    }

    clickAppLogoText() {
        Util.waitUntilElementIsVisible(this.appTitle);
        this.appTitle.click();
    }

    clickFormButton = function () {
        Util.waitUntilElementIsVisible(this.formButton);
        return this.formButton.click();
    };

    checkLogoTooltip(logoTooltip) {
        let tooltip = element(by.css('a[title="' + logoTooltip + '"]'));
        Util.waitUntilElementIsVisible(tooltip);
    }

    openViewer(nodeId) {
        browser.get(TestConfig.adf.url + `/files(overlay:files/${nodeId}/view`);
        return this;
    }

    goToSite(site) {
        browser.get(TestConfig.adf.url + `/files/${site.entry.guid}/display/list`);
    }

    checkContentServicesButtonIsDisplayed() {
        Util.waitUntilElementIsVisible(contentServicesButton);
    }
}
