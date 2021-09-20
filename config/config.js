import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},//ant design pro 配置
  routes,
  fastRefresh: {},
  //   history:{
  //       type:'hash'
  //   }
  title: 'hello-umi',
});
