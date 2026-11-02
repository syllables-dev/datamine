export interface Build {
  build: string;
  ipsw: string;
  released: string;
  version: string;
}

export interface AppleDbLink {
  active: boolean;
  preferred: boolean;
  url: string;
}

export interface AppleDbSource {
  deviceMap: string[];
  links: AppleDbLink[];
  type: string;
}

export interface AppleDbRelease {
  build: string;
  deviceMap?: string[];
  released?: string;
  sources?: AppleDbSource[];
  version: string;
}

export type RegressionItem = [kind: string, scope: string, value: string];

export interface Regression {
  covered: RegressionItem[];
  gained: RegressionItem[];
  movedTypes: string[];
  removed: RegressionItem[];
  unexplained: RegressionItem[];
}

export interface NativeReport extends Regression {
  from: Build;
  to: Build;
}
