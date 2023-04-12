import { PageLoaderService } from 'src/app/core/services/page-loader.service';
import { HttpHandler, HttpRequest } from "@angular/common/http";
import { LoadingInterceptor } from "./loader-interceptor.interceptor";
import { MockService } from 'ng-mocks';

import * as rxjsOperators from 'rxjs/operators';
import { ApiUrl } from '../api.config';

jest.spyOn(rxjsOperators, 'timeout');
jest.mock('@cart/environments/environment', () => ({
  environment: {
    asmSessionApiUrl: 'https://backoffice.prod.amway.com',
  },
}));

describe('LoadingInterceptor ', () => {
  let interceptor: LoadingInterceptor ;
  let pageLoaderService: PageLoaderService;
  let photoListRequest: HttpRequest<unknown>;
  let next: HttpHandler;
  let photoItempiRequest: any;

  beforeEach(() => {
    photoItempiRequest = new HttpRequest('GET', `${ ApiUrl.API_BASE_URL}/id/0/600/400`);
    pageLoaderService = MockService(PageLoaderService);
    photoListRequest = new HttpRequest('GET', ApiUrl.API_LIST_URL);

    next = {
      handle: jest.fn().mockReturnValue(''),
    };
    interceptor = new LoadingInterceptor(pageLoaderService);
  });

  afterEach(jest.clearAllMocks);

  it('should add delay to finalize and switch loader', (done) => {
    interceptor.intercept(photoListRequest, next).subscribe(() => {
      expect(next.handle).toHaveBeenCalledWith(photoListRequest);
      expect(rxjsOperators.tap).toHaveBeenCalled();
      expect(rxjsOperators.delay).toHaveBeenCalled();
      expect(rxjsOperators.finalize).toHaveBeenCalled();
      done();
    })
  });

  it('should no add delay and no switch loader', (done) => {
    interceptor.intercept(photoItempiRequest, next).subscribe(() => {
      expect(next.handle).toHaveBeenCalledWith(photoItempiRequest);
      expect(rxjsOperators.tap).not.toHaveBeenCalled();
      expect(rxjsOperators.delay).not.toHaveBeenCalled();
      expect(rxjsOperators.finalize).not.toHaveBeenCalled();
      done();
    })
  });
});
