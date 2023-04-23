/**
 * 验证手机号
 */
export function validatePhone(value: string) {
  return /^1([0-9])\d{9}$/.test(value);
}
