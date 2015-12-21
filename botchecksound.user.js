// ==UserScript==
// @name         Botcheck Sound
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Play a sound when the botcheck comes up. Also plays sound when running out of mana.
// @match        http://amar.bornofsnails.net/index.php
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function playCustomSound()
{
    var customAudio = new Audio("http://amar.brooksmcmillin.com/sound.mp3");
    customAudio.play();
}

var onStartActionOriginal = Utils.onStartAction;

Utils.onStartAction = function(data)
{
    onStartActionOriginal(data);
    
    if(data["botcheck"]){
        playCustomSound();
    } else if (data.custom){
        playCustomSound();
    } else if (data.message == "You need mana to continue."){ 
        playCustomSound();
    }
}
