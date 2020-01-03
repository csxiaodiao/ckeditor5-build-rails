/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoSave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	SimpleUploadAdapter,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	RemoveFormat,
	Font,
	Indent,
	IndentBlock,
	AutoSave,
	Alignment,
	Strikethrough,
	Code
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'code',
			'fontColor',
			'|',
			'link',
			'imageUpload',
			'|',
			'outdent',
			'indent',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'|',
			'insertTable',
			'|',
			'removeFormat',
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6' },
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	simpleUpload: {
		uploadUrl: '/uploads',
		headers: {
			'X-CSRF-TOKEN': document.querySelector('meta[name=\'csrf-token\']').getAttribute('content'),
		}
	},
	fontColor: {
		colors: [
			{
				color: '#000000',
				label: 'Black'
			},
			{
				color: '#424242',
				label: 'Dim grey'
			},
			{
				color: '#757575',
				label: 'Grey'
			},
			{
				color: '#BDBDBD',
				label: 'Light grey'
			},
			{
				color: '#fff',
				label: 'White',
				hasBorder: true
			},
			{
				color: '#D50000',
				label: 'Red'
			},
			{
				color: '#E91E63',
				label: 'Pink'
			},
			{
				color: '#9C27B0',
				label: 'Purple'
			},
			{
				color: '#3F51B5',
				label: 'Indigo'
			},
			{
				color: '#2196F3',
				label: 'Blue'
			},
			{
				color: '#03A9F4',
				label: 'Light blue'
			},
			{
				color: '#018D00',
				label: 'Green'
			},
			{
				color: '#AEEA00',
				label: 'Light green'
			},
			{
				color: '#FFEB3B',
				label: 'Yellow'
			},
			{
				color: '#FF5722',
				label: 'Orange'
			}
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-CN'
};
