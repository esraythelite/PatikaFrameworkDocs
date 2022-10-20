import React from "react";
import TreeView from "@mui/lab/TreeView";
import MenuItem from "./MenuItem";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Menu({ menu, onMDUrl }) {
	return (
		<TreeView
			aria-label="file system navigator"
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpandIcon={<ChevronRightIcon />}
			sx={{
				height: "100vh",
				flexGrow: 1,
				maxWidth: 400,
				width: "256px",
				overflowY: "auto",
				overflowX: "none",
				position: "left",
				color: "#fff",
				backgroundColor: "#001b34"
			}}
		>
			{menu &&
				menu.map((item, index) => {
					return (
						<MenuItem
							item={item}
							onClick={onMDUrl}
							key={item.title}
						/>
					);
				})}
		</TreeView>
	);
}