export interface IFooBar {
  id: number;
  val: string;
  link : string;
}

export interface IFooBarProps {
  item: IFooBar;
  whiteBg?: boolean;
}

export interface IDirectory {
  id? : number;
  name: string;
  link: string;
}

export interface IDirectoryProps {
  item: IDirectory;
}



export interface IDetailFooter {
  id: number;
  from: string;
  to: string;
}

export interface IDetailFooterProps {
  item: IDetailFooter;
}

export interface ITitleContent {
  id? : number;
  title : string;
  content : string;
}

export interface IPopularPackage {
  id? : number;
  title : string;
  price: number;
  image : any;
  link :string;
  
}
