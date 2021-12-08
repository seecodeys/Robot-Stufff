import React from 'react';

const Scroll = (property) => {
	return (
		<div style={{ overflowY: 'scroll', height: '80VH'}}>
			{property.children};
		</div>
	)
}

export default Scroll;