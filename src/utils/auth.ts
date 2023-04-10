const title = "管理后台";
const tokenKey = "admin-token";

export function getPageTitle(pageTitle: string): string {
  return `${pageTitle} - ${title}`;
}

export function setToken(token: string) {
  sessionStorage.setItem(tokenKey, token);
}

export function getToken() {
  return sessionStorage.getItem(tokenKey) || false;
}

export function removeToken() {
  sessionStorage.removeItem(tokenKey);
}

export function filterList(list: API.CheckUserList[]) {
  return list.filter((m, i) => {
    return (m.operation = "删除"), (m.index = i + 1);
  });
}
