import type { App } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export function installElementPlus(app: App) {
  app.use(ElementPlus);
}
