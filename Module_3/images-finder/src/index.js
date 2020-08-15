"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import ApiServices from './components/api-services';

const query = 'dog';
const page = 1;
const key = "17692964-f8d106e9264a402f5a3ea4398";
const perPage = 12;

const api = new ApiServices();
// const items = api.getItems("dog");
// const res = api.getResource("dog");
fetch(
    `${this._apiBase}&q=${query}&page=${page}&key=${key}&per_page=${perPage}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.hits);
