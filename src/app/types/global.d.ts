declare module "*scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const className: IClassNames;
  export  = className;
}