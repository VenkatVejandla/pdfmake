var pdfmake = require('../js/index'); // only during development, otherwise use the following line
//var pdfmake = require('pdfmake');

var Roboto = require('../fonts/Roboto');
pdfmake.addFonts(Roboto);

var docDefinition = {
	background: function (page) {
		if (page !== 2) {
			return [
				'Background paragraph on page ' + page,
				'Another background paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
				{
					image: 'bee',
					width: 200
				}
			];
		}
	},
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
		'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
		'Another Page',
		'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
		'Another Page'
	],

	images: {
		bee: 'data:image/png;base64,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',
	}
};

var now = new Date();

var pdf = pdfmake.createPdf(docDefinition);
pdf.write('pdfs/background.pdf').then(() => {
	console.log(new Date() - now);
}, err => {
	console.error(err);
});
