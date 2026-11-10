export interface Build {
  build: string;
  ipsw: string;
  released: string;
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
