import React from 'react';

export const ContainerComponent = ({label}) => <div className="container-fluid">
	<div className="d-flex flex-row justify-content-center">
		<h4 className="mt-3">{label}</h4>
	</div>
</div>;