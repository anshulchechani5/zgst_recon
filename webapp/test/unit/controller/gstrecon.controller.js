/*global QUnit*/

sap.ui.define([
	"zgstrecon/zgstrecon/controller/gstrecon.controller"
], function (Controller) {
	"use strict";

	QUnit.module("gstrecon Controller");

	QUnit.test("I should test the gstrecon controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
