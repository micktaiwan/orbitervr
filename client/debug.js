/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

import './debug.html';

app.debug = new ReactiveVar(false);
Template.debug.onCreated(function () { });

Template.debug.onRendered(function () { });

Template.debug.helpers({

    value() {
        return app.debug.get() || "default text \n à la ligne";
    }
});

Template.debug.events({});