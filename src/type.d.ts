export interface PageType{
  id:string;
  title:string;
  content:string;
}

export type ApiPage = Omit<PageType, 'id'>

export interface PageMutation {
  title:string;
  content:string;
}