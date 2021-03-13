import React, { useState } from "react";

function Options(options) {
	const [showMore, setShowMore] = useState(false);

	return (
		<div>
			<div
				className="more"
				onClick={() => {
					if (showMore) {
						setShowMore(false);
					} else {
						setShowMore(true);
					}
				}}
			>
				Show More
			</div>
			{showMore ? (
				<div className="outer">
					{options.item.map((ele) => {
						return (
							<div key={Math.random()} className="option-wrapper">
								<div className="option">{ele.option}</div>
								<div className="optionDescription">{ele.optionDescription}</div>
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default Options;
