sap.ui.jsview("zui5_json.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_json.main
	*/ 
	getControllerName : function() {
		return "zui5_json.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_json.main
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.json.JSONModel();
		var oTable = new sap.ui.table.Table({
			visibleRowCount : 7,
			firstVisibleRow : 0,
			selectionMode : sap.ui.table.SelectionMode.Single,
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			fixedColumnCount : 2
		});
		
		var oColumn1 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"day"}),
			template:new sap.ui.commons.TextView().bindText("we_day"),
			width:"300px"
		});
		
		var oColumn2 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Comment"}),
			template:new sap.ui.commons.TextView().bindProperty("text","we_comment"),
			width:"300px"
		});
		
		var oColumn3 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Rating"}),
			template:new sap.ui.commons.RatingIndicator().bindProperty("value","we_rating"),
			width:"300px"
		});
		
		console.clear();
		console.log('Creating 1st Column');
		
		oTable.addColumn(oColumn1);
		
		console.log('Creating 2nd Column');
		
		oTable.addColumn(oColumn2);
		
		console.log('Creating 3rd Column');
		
		oTable.addColumn(oColumn3);
		
		console.log('Columns created');
		
		oModel.loadData("json/week.json");
		oTable.setModel(oModel);
		console.log('Binding rows to table');
		oTable.bindRows("/week");
		return oTable;
	}

});
