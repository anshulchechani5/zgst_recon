sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("zgstrecon.zgstrecon.controller.gstrecon", {
            onInit: function () {

            },

            Next:function(){
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Loading",
                    text: "Please wait"
                });
                oBusyDialog.open();
                var Companycode = this.getView().byId("idCode").getValue();
                var From = this.getView().byId("From").getValue();
                var To = this.getView().byId("To").getValue();
                var Gstno = this.getView().byId("Orderfr").getValue();
                var oComboBox = this.getView().byId("idActionRadioBtnGroup").getSelectedButton().getText();
                
                // https://my405100.s4hana.cloud.sap/sap/bc/http/sap/ZGST_RECON_SWARAJ?sap-client=080
                var url1 = "/sap/bc/http/sap/ZGST_RECON_SWARAJ?";
                var url2 = "&Companycode=";
                var url3 = "&DateFrom=";
                var url10 = "&DateTo=";
                var url4= "&GSTNO=";
                var url8 ="&selection="
               
                var url5 = url2 + Companycode;
                var url6 = url3 + From ;
                var url11 = url10 + To ;
                var url7= url4 + Gstno;
                var url9= url8 + oComboBox;
    
                var url = url1 + url5 + url6 + url11 + url7 + url9;
    
                // var username = "nvlabap3";
                // var password = "Mike$1245";
                $.ajax({
                    url: url,
                    type: "GET",
                    beforeSend: function (xhr) {
                        xhr.withCredentials = true;
                        // xhr.username = username;
                        // xhr.password = password;
                    },
                    success: function (result) {
                        MessageBox.show(result);  
                        oBusyDialog.close();
                       
                    }.bind(this)
                });
        
            },

        });
    });
