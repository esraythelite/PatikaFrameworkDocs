import React from "react";
import TreeItem from "@mui/lab/TreeItem";

export default function MenuItem({ item, onClick }) {
	return (
		<TreeItem
			nodeId={item.title}
			label={item.title}
			onClick={() => {
				if (item.link.length !== 0) onClick(item);
			}}
		>
			{item.children &&
				item.children.map((innerItem) => {
					return (
						<MenuItem
							key={innerItem.title}
							item={innerItem}
							onClick={onClick}
						/>
					);
				})}
		</TreeItem>
	);
}
