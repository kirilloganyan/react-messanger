import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {BrowserRouter,} from "react-router-dom";
import { Provider } from 'react-redux';
import Router from "./Router";
import initStore from './utils/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <Theme preset={presetGpnDefault}>
                <Router/>
            </Theme>
        </BrowserRouter>
    </Provider>
);

