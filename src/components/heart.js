import React from "react";


const Like = ({ src, className, alt, header }) => (
	<div className={className}>
		<image src={src} className={className} alt={alt} header={header} role="Coracao" />
	</div>
);

export default Like;