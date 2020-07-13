import { loadMicroApp } from 'qiankun';
// for angular subapp
import 'zone.js';

const app1 = loadMicroApp(
  { name: 'my-app', entry: '//localhost:4208', container: '#angular7' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);



