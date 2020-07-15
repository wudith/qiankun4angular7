import { loadMicroApp } from 'qiankun';
// for angular subapp
import 'zone.js';

const app1 = loadMicroApp(
  { name: 'my-app', entry: '//localhost:4208', container: '#angular7' },
  { name: 'my-app-custom', entry: '//localhost:4206', container: '#angular7_custom' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);



