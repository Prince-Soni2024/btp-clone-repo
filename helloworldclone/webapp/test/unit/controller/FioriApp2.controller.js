/*global QUnit*/

sap.ui.define([
	"sapbtp/helloworldclone/controller/FioriApp2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FioriApp2 Controller");

	QUnit.test("I should test the FioriApp2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
