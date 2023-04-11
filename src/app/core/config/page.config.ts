import { InjectionToken } from "@angular/core";

export interface PageConfig {
  isRedirectedToPhotoDetails: boolean;
  isShownActionsBlocks: boolean;
}

export const PAGE_CONFIG = new InjectionToken<PageConfig>('pageConfig');
