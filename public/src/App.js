import { useEffect, useState } from "react";
import axios from "axios";
import MDrenderer from "./components/MDrenderer";
import Menu from "./components/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";

import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";

let theme = createTheme({
	palette: {
		primary: {
			light: "#63ccff",
			main: "#009be5",
			dark: "#006db3",
			
		},
		secondary: {
			light: "#000",
			main: "#001b34",
			dark: "#000",
		},
		third: {
			patika:"#001b34"
		}
	},
	typography: {
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiTab: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
});

theme = {
	...theme,
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: "#001b34",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
				contained: {
					boxShadow: "none",
					"&:active": {
						boxShadow: "none",
					},
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					marginLeft: theme.spacing(1),
				},
				indicator: {
					height: 3,
					borderTopLeftRadius: 3,
					borderTopRightRadius: 3,
					backgroundColor: theme.palette.common.white,
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: "none",
					margin: "0 16px",
					minWidth: 0,
					padding: 0,
					[theme.breakpoints.up("md")]: {
						padding: 0,
						minWidth: 0,
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: theme.spacing(1),
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					borderRadius: 4,
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					backgroundColor: "rgb(255,255,255,0.15)",
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					"&.Mui-selected": {
						color: "#4fc3f7",
					},
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: 14,
					fontWeight: theme.typography.fontWeightMedium,
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					color: "inherit",
					minWidth: "auto",
					marginRight: theme.spacing(2),
					"& svg": {
						fontSize: 20,
					},
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					width: 32,
					height: 32,
				},
			},
		},
	},
};

const drawerWidth = 256;

function App() {
	const [menu, setMenu] = useState(null);
	const [mdBody, setMDBody] = useState("");
	const [selectedItem, setSelectedItem] = useState("");
	const onMDUrl = ({ link, title, status }) => {
		setSelectedItem({ title, status });
		axios.get(link).then((data) => {
			setMDBody(data.data);
		});
	};

	useEffect(() => {
		axios.get("/menu.json").then((data) => {
			setMenu(data.data);
		});
		axios.get("/default.md").then((data) => {
			setMDBody(data.data);
		});
	}, []);

	const [mobileOpen, setMobileOpen] = useState(false);
	const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", minHeight: "100vh" }}>
				<CssBaseline />
				<Box
					component="nav"
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				>
					<Drawer variant="permanent">
						<Typography
							variant="h5"
							sx={{
								color: "white",
								backgroundColor: "#1986ce",
								textAlign: "center",
								paddingTop: "13px",
								marginBottom: 0,
							}}
							gutterBottom
						>
							Patika framework
						</Typography>
						<Divider sx={{ marginBottom: "15px"}} />
						{menu && <Menu menu={menu.menu} onMDUrl={onMDUrl} />}
					</Drawer>
				</Box>
				<Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
					<Header
						onDrawerToggle={handleDrawerToggle}
						title={selectedItem.title || ".Net documentation"}
						status={selectedItem && selectedItem.status}
					/>
					<Box
						component="main"
						sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
					>
						<MDrenderer body={mdBody} />
					</Box>
					<Box component="footer" sx={{ p: 2, bgcolor: "#1986ce" }}>
						<img src="/images/patika_black_icon.png" alt="image" height='100px' />
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
