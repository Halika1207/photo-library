const minSMSize = 480;
const minMDSize = 768;
const minLGSize = 1024;
const minXLSize = 1280;

export class ScreenSizeDetector {
  public XS: boolean;
  public SM: boolean;
  public MD: boolean;
  public LG: boolean;
  public XL: boolean;

  constructor(screenWidth: number) {
    this.XS = screenWidth < minSMSize;
    this.SM = screenWidth >= minSMSize && screenWidth < minMDSize;
    this.MD = screenWidth >= minMDSize && screenWidth < minLGSize;
    this.LG = screenWidth >= minLGSize && screenWidth < minXLSize;
    this.XL = screenWidth >= minXLSize;
  }
}


export class LoadDataQuantityDetector  {
  public quantitySmallDevice: number;
  public quantityBigDevice: number;
  private columnSmallDevice = 2;
  private columnBigDevice = 3;
  private cardHeight = 320;

  constructor(screenSize: ScreenSizeDetector, screenHeight: number) {
    this.quantitySmallDevice = (screenSize.XS || screenSize.SM || screenSize.MD)
      ? this.columnSmallDevice * Math.ceil(screenHeight/this.cardHeight)
      : 0;

      this.quantityBigDevice = (screenSize.LG || screenSize.XL)
        ? this.columnBigDevice * Math.ceil(screenHeight/this.cardHeight)
        : 0;
  }
}
