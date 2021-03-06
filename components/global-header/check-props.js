/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
/* eslint-disable import/no-mutable-exports */

import deprecatedProperty from '../../utilities/warning/deprecated-property';
import getComponentDocFn from '../../utilities/get-component-doc';

let checkProps = function() {};

if (process.env.NODE_ENV !== 'production') {
	checkProps = function(COMPONENT, props, jsonDoc) {
		const createDocUrl = getComponentDocFn(jsonDoc);

		deprecatedProperty(
			COMPONENT,
			props.skipToContentAssistiveText,
			'skipToContentAssistiveText',
			"assistiveText['skipToContent']",
			createDocUrl('assistiveText')
		);
		deprecatedProperty(
			COMPONENT,
			props.skipToNavAssistiveText,
			'skipToNavAssistiveText',
			"assistiveText['skipToNav']",
			createDocUrl('assistiveText')
		);
	};
}

export default checkProps;
