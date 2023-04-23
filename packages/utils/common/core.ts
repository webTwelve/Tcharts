export const NOOP = () => {};

/**
 * sleep
 * @param interval 间隔
 */
export async function sleep(interval: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, interval);
  });
}

/**
 * 复制
 * @param text 要复制的文案
 */
export function copy(text: string) {
  try {
    const transfer = document.createElement("input");
    document.body.appendChild(transfer);
    transfer.value = text;
    transfer.focus();
    transfer.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    transfer.blur();
    document.body.removeChild(transfer);
    return Promise.resolve("复制成功！");
  } catch (error: unknown) {
    console.error(error);
    return Promise.reject("该浏览器暂不支持，请手动复制");
  }
}

export function trimArr(s: string) {
  return (s || "").split(" ").filter((item) => !!item.trim());
}

/**
 * 添加class
 * @param el 元素
 * @param cls class名
 */
export function addClass(el: HTMLElement | Element, cls: string): void {
  if (!el) return;
  let className = el.getAttribute("class") || "";
  const curClass = trimArr(className);
  const classes = (cls || "")
    .split(" ")
    .filter((item) => !curClass.includes(item) && !!item.trim());

  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(" ")}`;
    el.setAttribute("class", className);
  }
}

/**
 * 移除class
 * @param el 元素
 * @param cls class名
 */
export function removeClass(el: HTMLElement | Element, cls: string): void {
  if (!el || !cls) return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute("class") || "";

  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach((item) => {
    curClass = curClass.replace(` ${item} `, " ");
  });
  const className = trimArr(curClass).join(" ");
  el.setAttribute("class", className);
}

/**
 * 枚举转换为key:value数组，这玩意儿不支持value为空字符串的枚举
 * @param e 枚举
 */
export function eachEnum(e: object) {
  const arry = Object.entries(e);
  arry.splice(arry.length / 2);
  return arry;
}
