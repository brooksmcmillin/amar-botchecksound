// ==UserScript==
// @name         Botcheck Sound
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Play a sound when the botcheck comes up.
// @match        http://amar.bornofsnails.net/index.php
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function playCustomSound()
{
    var customAudio = new Audio("http://amar.brooksmcmillin.com/sound.mp3");
    customAudio.play();
};

var onStartActionOriginal = Utils.onStartAction;

Utils.onStartAction = function(data)
{
    onStartActionOriginal(data);
    if(data["botcheck"])
        playCustomSound();
};
