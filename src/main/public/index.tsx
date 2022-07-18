import Router from '@main/router';
import React from 'react';
import { createRoot } from 'react-dom/client'
import '@presentation/assets/styles/less/global.less'

const root = createRoot(document.getElementById('root'));

root.render(
	<Router/>
);