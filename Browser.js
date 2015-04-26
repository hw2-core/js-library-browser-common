/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

'use strict';

hw2.define([
    'hw2!{PATH_CORE}modules/js/modules/jquery/index.js',
    "hw2!{PATH_JS_LIB}common/index.js"
], function () {
    var $ = this;
    $.Browser = $.Class({});

    // static initialization
    $.Browser.JQ = jQuery.noConflict(true);

    return $.Browser;
}); 