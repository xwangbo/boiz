
/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('App.Application', {
	extend : 'Ext.app.Application',
	
	requires:['Ext.overrides.toolbar.Paging','Ext.overrides.Date'],

	name : 'App',

	// The tab we want to activate if there is no "#tag" in the URL.
	defaultToken : 'quarterly',

	views : [ 'App.view.main.Main' ],

	launch : function() {
		Ext.fly('loader').destroy();
		Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
		// Let's add a CSS class to body if flex box wrap is not implemented or
		// broken
		// http://flexboxlayouts.com/flexboxlayout_tricks.html
		if (Ext.browser.is.Gecko && Ext.browser.version.major < 28) {
			Ext.getBody().addCls('x-flex-wrap-broken');
		}
	}
});
