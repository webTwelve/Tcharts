import Components from "./component";
import type { App, Plugin } from "vue";

function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return {
    install
  };
}

export default makeInstaller([...Components]);
