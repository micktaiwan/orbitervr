/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

import './text.html';

Template.text.onCreated(function () { });

Template.text.onRendered(function () { });

Template.text.helpers({

    value: function () {
        return this.value || "default text";
    }
});

Template.text.events({});