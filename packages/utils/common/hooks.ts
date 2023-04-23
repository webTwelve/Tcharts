import { ref, reactive, computed, watch } from "vue-demi";

/**
 * 验证码倒计时
 * @param countDown 倒计时时长
 * @param countDownText 倒计时时文字
 * @param waitText 等待时文字
 */
export function useVerificationCode(
  countDown = 60,
  countDownText = "s后再次发送",
  waitText = "获取验证码"
) {
  let timer = 0;
  const countDownRef = ref(countDown);

  const codeInfo = reactive({
    text: computed(() => {
      if (!codeInfo.isOK) {
        return `${countDownRef.value}${countDownText}`;
      } else {
        return waitText;
      }
    }),
    isOK: true
  });

  const stopWatch = watch(
    () => codeInfo.isOK,
    (nv) => {
      if (!nv) {
        timer = window.setInterval(() => {
          countDownRef.value--;
          if (countDownRef.value === 0) {
            clearInterval(timer);
            codeInfo.isOK = true;
            countDownRef.value = countDown;
          }
        }, 1000);
      }
    }
  );

  function destroy() {
    clearInterval(timer);
    stopWatch();
  }

  return { codeInfo, destroy };
}
