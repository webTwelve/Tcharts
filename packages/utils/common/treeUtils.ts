/* eslint-disable */

/**
 * (异步)遍历树并执行某些操作，在func返回true时返回当前节点
 * @param tree treeList
 * @param childNodes Node key Array
 * @param func 遍历时执行的函数（可使用异步函数）,返回false时进行下一次递归
 */
export async function treeTraversal<T>(
  tree: T[],
  childNodes: string[],
  func: (item: T) => unknown
) {
  const stack = tree.slice();
  let tmpNode: T;

  while (stack.length > 0) {
    tmpNode = stack.pop()!;
    if (!(await func(tmpNode))) {
      for (const childNode of childNodes) {
        if (
          (tmpNode as any)[childNode] &&
          (tmpNode as any)[childNode].length > 0
        ) {
          stack.push(...(tmpNode as any)[childNode]);
        }
      }
    } else {
      return tmpNode;
    }
  }
}

/**
 * (同步)遍历树并执行某些操作，在func返回true时返回当前节点
 * @param tree treeList
 * @param childNodes Node key Array
 * @param func 遍历时执行的同步函数,返回false时进行下一次递归
 */
export function syncTreeTraversal<T>(
  tree: T[],
  childNodes: string[],
  func: (item: T) => unknown
) {
  const stack = tree.slice();
  let tmpNode: T;

  while (stack.length > 0) {
    tmpNode = stack.shift()!;
    if (!func(tmpNode)) {
      for (const childNode of childNodes) {
        if (
          (tmpNode as any)[childNode] &&
          (tmpNode as any)[childNode].length > 0
        ) {
          stack.push(...(tmpNode as any)[childNode]);
        }
      }
    } else {
      return tmpNode;
    }
  }
}

/**
 * 深度优先遍历
 * @param tree treeList
 * @param childNodes Node key Array
 * @param func 遍历时执行的同步函数
 */
export function DepthTraversalOfTree<T>(
  tree: T[],
  childNodes: string[],
  func: (item: T) => unknown
) {
  for (const tmpNode of tree) {
    for (const childNode of childNodes) {
      if (
        (tmpNode as any)[childNode] &&
        (tmpNode as any)[childNode].length > 0
      ) {
        DepthTraversalOfTree((tmpNode as any)[childNode], childNodes, func);
      }
    }
    func(tmpNode);
  }
}

/**
 * (同步)遍历树并执行某些操作，并返回该树
 * @param tree treeList
 * @param childNodes Node key Array
 * @param func 遍历时执行的同步函数,返回false时进行下一次递归
 */
export function mapTree<T>(
  tree: T[],
  childNodes: string[],
  func: (
    /** 当前遍历的元素 */
    item: T,
    /** 当前遍历的级别 */
    level: number,
    _id?: string
  ) => unknown
) {
  const action = (_tree: T[], _level: number): T[] => {
    const temp: T[] = [];
    for (const treeNode of _tree) {
      func(treeNode, _level);
      for (const childNode of childNodes) {
        if (
          (treeNode as any)[childNode] &&
          (treeNode as any)[childNode].length > 0
        ) {
          temp.push(...(treeNode as any)[childNode]);
        }
      }
    }
    if (temp.length > 0) {
      return action(temp, ++_level);
    }
    return tree;
  };
  return action(tree, 0);
}
