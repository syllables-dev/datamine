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
