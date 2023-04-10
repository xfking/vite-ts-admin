declare namespace API {
  interface InterData {
    account: string;
    password: string;
  }
  interface ResolveData<T> {
    code: number;
    message: string;
    data?: T;
  }
  interface readAny<T> {
    value: T;
  }
  interface popsData<T> {
    list?: T;
    total: number;
  }
  interface ListParams {
    page: number;
    size: number;
  }
  export interface CheckUserList {
    value: API.CheckUserList;
    name: string;
    createTime: string;
    operation: string;
    index: number;
  }
  interface FunClick<T> {
    value?: T;
    row?: T;
  }
}
