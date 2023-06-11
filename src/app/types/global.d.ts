declare module "*scss" {
  interface IClassNmaes {
    [className: string]: string;
  }
  const className: IClassNmaes;
  export  = className;
}