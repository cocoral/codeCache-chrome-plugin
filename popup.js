// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

let goHome = document.getElementById("home");

chrome.storage.sync.get("color", function (data) {
  goHome.style.backgroundColor = data.color;
  goHome.setAttribute("value", data.color);
});

goHome.onclick = function (element) {
  var newURL = "http://codecachedev.herokuapp.com/";
  chrome.tabs.create({ url: newURL });
};
