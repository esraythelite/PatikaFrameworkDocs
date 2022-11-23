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
import { Route, Routes } from "react-router-dom";
import AuthServer from "./components/Authserver/AuthServerMain";
import Switcher from "./components/Switcher";
import AuthWithPassword from "./components/Authserver/AuthWithPassword";
import Home from "./components/Home";
import ExternalAuth from "./components/Authserver/External/ExternalAuth";
import AppleAuth from "./components/Authserver/External/AppleAuth";
import FacebookAuth from "./components/Authserver/External/FacebookAuth";
import GoogleAuth from "./components/Authserver/External/GoogleAuth";
import OktaAuth from "./components/Authserver/External/OktaAuth";
import Framework from "./components/Framework/Framework";
import Shared from "./components/Framework/Shared/Shared";
import Consts from "./components/Framework/Shared/components/Consts/Consts";
import Controllers from "./components/Framework/Shared/components/Controllers/Controllers";
import Dto from "./components/Framework/Shared/components/Dto/Dto";
import Identity from "./components/Framework/Shared/components/Dto/Identity";
import Entities from "./components/Framework/Shared/components/Entities/Entities";
import Enums from "./components/Framework/Shared/components/Enums/Enums";
import Interfaces from "./components/Framework/Shared/components/Interfaces/Interfaces";
import Mapper from "./components/Framework/Shared/components/Mapper/Mapper";
import Services from "./components/Framework/Shared/components/Services/Services";
import Events from "./components/Framework/Shared/components/Events/Events";
import Exceptions from "./components/Framework/Shared/components/Exceptions/Exceptions";
import Extensions from "./components/Framework/Shared/components/Extensions/Extensions";
import EnumHelper from "./components/Framework/Shared/components/Extensions/EnumHelper";
import FlagEnumExtensions from "./components/Framework/Shared/components/Extensions/FlagEnumExtensions";
import ResponseExtensions from "./components/Framework/Shared/components/Extensions/ResponseExtensions";
import GeneralTypeExtensions from "./components/Framework/Shared/components/Extensions/GeneralTypeExtensions";
import LinqExtensions from "./components/Framework/Shared/components/Extensions/LinqExtensions";
import LogWriterExtensions from "./components/Framework/Shared/components/Extensions/LogWriterExtensions";
import HttpClientService from "./components/Framework/Shared/components/Services/HttpClientService";
import InMemoryCacheService from "./components/Framework/Shared/components/Services/InMemoryCacheService";
import NullLogWriter from "./components/Framework/Shared/components/Services/NullLogWriter";
import Sha256Hasher from "./components/Framework/Shared/components/Services/Sha256Hasher";

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
			patika: "#001b34"
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

	const onMDUrl = ({ link, title, status, isReact }) => {
		console.log('onMDUrl')
		setSelectedItem({ title, status, isReact, link });
		if (!isReact) {
			axios.get(link).then((data) => {
				setMDBody(data.data);
			});
		} else {
			setMDBody("");
		}
	};
	useEffect(() => {
		axios.get("/menu.json").then((data) => {
			setMenu(data.data);
		});
		axios.get("/default.md").then((data) => {
			setMDBody(data.data);
		});
	}, []);

	useEffect(() => {
		axios.get("/menu.json").then((data) => {
			setMenu(data.data);
		});		
	}, [selectedItem]);

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
							Patika Framework
						</Typography>
						<Divider sx={{ marginBottom: "15px" }} />
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
						<Routes>
							<Route path="/home" element={<Home />} />
							<Route path="contents/authserver/authserver" element={<AuthServer />} />
							<Route path="contents/authserver/password" element={<AuthWithPassword />} />
							<Route path="contents/authserver/external/external" element={<ExternalAuth />} />
							<Route path="contents/authserver/external/apple" element={<AppleAuth />} />
							<Route path="contents/authserver/external/google" element={<GoogleAuth />} />
							<Route path="contents/authserver/external/facebook" element={<FacebookAuth />} />
							<Route path="contents/authserver/external/okta" element={<OktaAuth />} />
							
							<Route path="contents/framework/packages" element={<Framework />} />
							<Route path="contents/framework/packages/shared" element={<Shared />} />
							<Route path="contents/framework/packages/shared/consts" element={<Consts />} />
							<Route path="contents/framework/packages/shared/controllers" element={<Controllers />} />
							<Route path="contents/framework/packages/shared/dto" element={<Dto />} />
							<Route path="contents/framework/packages/shared/dto/identity" element={<Identity />} />
							<Route path="contents/framework/packages/shared/entities" element={<Entities />} />
							<Route path="contents/framework/packages/shared/enums" element={<Enums />} />
							<Route path="contents/framework/packages/shared/events" element={<Events />} />
							<Route path="contents/framework/packages/shared/exceptions" element={<Exceptions />} />

							<Route path="contents/framework/packages/shared/extensions" element={<Extensions />} />
							<Route path="contents/framework/packages/shared/extensions/enumhelper" element={<EnumHelper />} /> 
							<Route path="contents/framework/packages/shared/extensions/flagEnumExtensions" element={<FlagEnumExtensions />} /> 
							<Route path="contents/framework/packages/shared/extensions/responseExtensions" element={<ResponseExtensions />} /> 
							<Route path="contents/framework/packages/shared/extensions/generalTypeExtensions" element={<GeneralTypeExtensions />} /> 
							<Route path="contents/framework/packages/shared/extensions/linqExtensions" element={<LinqExtensions />} /> 
							<Route path="contents/framework/packages/shared/extensions/logWriterExtensions" element={<LogWriterExtensions />} /> 
							
							<Route path="contents/framework/packages/shared/interfaces" element={<Interfaces />} />
							<Route path="contents/framework/packages/shared/mapper" element={<Mapper />} />
						
							<Route path="contents/framework/packages/shared/services" element={<Services />} />
							<Route path="contents/framework/packages/shared/services/httpClient" element={<HttpClientService />} />
							<Route path="contents/framework/packages/shared/services/inMemoryCache" element={<InMemoryCacheService />} />
							<Route path="contents/framework/packages/shared/services/nullLogWriter" element={<NullLogWriter />} />
							<Route path="contents/framework/packages/shared/services/sha256Hasher" element={<Sha256Hasher />} />							
							
						</Routes>
						{
							selectedItem.isReact ?
								(
									<Switcher link={selectedItem.link} />
								) :
								(
									<MDrenderer body={mdBody} />
								)
						}
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