/*! Bootstrap 5 styling wrapper for ColReorder
 * ©2018 SpryMedia Ltd - datatables.net/license
 */

import $ from 'jquery';
import DataTable from 'datatables.net-bs5';
import ColReorder from 'datatables.net-colreorder';


(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs5', 'datatables.net-colreorder'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net-bs5')(root, $).$;
			}

			if ( ! $.fn.dataTable.ColReorder ) {
				require('datatables.net-colreorder')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {

return $.fn.dataTable;

}));

export default DataTable;
