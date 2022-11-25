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
import Switcher from "./components/Switcher";
import Home from "./components/Home"; 
import Framework from "./components/Framework/Framework";
import Shared from "./components/Framework/Shared/Shared";
import Consts from "./components/Framework/Shared/components/Consts/Consts";
import Controllers from "./components/Framework/Shared/components/Controllers/Controllers";
import Dto from "./components/Framework/Shared/components/Dto/Dto";
import Entities from "./components/Framework/Shared/components/Entities/Entities";
import Enums from "./components/Framework/Shared/components/Enums/Enums";
import Interfaces from "./components/Framework/Shared/components/Interfaces/Interfaces";
import Mapper from "./components/Framework/Shared/components/Mapper/Mapper";
import Services from "./components/Framework/Shared/components/Services/Services";
import Events from "./components/Framework/Shared/components/Events/Events";
import Exceptions from "./components/Framework/Shared/components/Exceptions/Exceptions";
import Extensions from "./components/Framework/Shared/components/Extensions/Extensions";
import Domain from "./components/Framework/Domain/Domain";
import DomainInterfaces from "./components/Framework/Domain/components/Interfaces/DomainInterfaces";
import LogDbContext from "./components/Framework/Domain/components/LogDbContext/LogDbContext";
import DomainServices from "./components/Framework/Domain/components/Services/DomainServices";
import IdentityShared from "./components/Framework/IdentityShared/IdentityShared";
import AttributesIdentityShared from "./components/Framework/IdentityShared/components/Attributes/AttributesIdentityShared";
import DtoIdentityShared from "./components/Framework/IdentityShared/components/Dto/DtoIdentityShared";
import ExceptionsIdentityShared from "./components/Framework/IdentityShared/components/Exceptions/ExceptionsIdentityShared";
import IdentitySharedDbContext from "./components/Framework/IdentityShared/components/DBContext/IdentitySharedDbContext";
import InterfacesIdentityShared from "./components/Framework/IdentityShared/components/Interfaces/InterfacesIdentityShared";
import ModelsIdentityShared from "./components/Framework/IdentityShared/components/Models/Models";
import ConstsIdentityShared from "./components/Framework/IdentityShared/components/ConstsIdentityShared";
import ApplicationContracts from "./components/Framework/ApplicationContracts/ApplicationContracts";
import InterfacesAppContracts from "./components/Framework/ApplicationContracts/components/Interfaces/InterfacesAppContracts";
import MapperAppContracts from "./components/Framework/ApplicationContracts/components/Mapper/MapperAppContracts";
import Application from "./components/Framework/Application/Application";
import ServicesApplication from "./components/Framework/Application/components/Services/ServicesApplication";
import MapperApplication from "./components/Framework/Application/components/Mapper/MapperApplication";
import JwtToken from "./components/Framework/JwtToken/JwtToken";
import JwtTokenInterfaces from "./components/Framework/JwtToken/components/JwtTokenInterfaces";
import JwtTokenServices from "./components/Framework/JwtToken/components/JwtTokenServices";
import JwtTokenModels from "./components/Framework/JwtToken/components/JwtTokenModels";
import JwtTokenMiddlewares from "./components/Framework/JwtToken/components/JwtTokenMiddlewares";
import JwtTokenExtensions from "./components/Framework/JwtToken/components/JwtTokenExtensions";
import JwtTokenExceptions from "./components/Framework/JwtToken/components/JwtTokenExceptions";
import JwtAuthProvider from "./components/Framework/JwtAuthProvider/JwtAuthProvider";
import JwtAuthProviderExtensions from "./components/Framework/JwtAuthProvider/components/JwtAuthProviderExtensions";
import AppleAuthProviderConsts from "./components/Framework/AppleAuthProvider/components/AppleAuthProviderConsts";
import AppleAuthProviderEnums from "./components/Framework/AppleAuthProvider/components/AppleAuthProviderEnums";
import AppleAuthProviderModels from "./components/Framework/AppleAuthProvider/components/AppleAuthProviderModels";
import AppleAuthProviderExtensions from "./components/Framework/AppleAuthProvider/components/AppleAuthProviderExtensions";
import AppleAuthProvider from "./components/Framework/AppleAuthProvider/AppleAuthProviderAuthProvider";
import FacebookAuthProvider from "./components/Framework/FacebookAuthProvider/FacebookAuthProviderAuthProvider";
import FacebookAuthProviderConsts from "./components/Framework/FacebookAuthProvider/components/FacebookAuthProviderConsts";
import FacebookAuthProviderEnums from "./components/Framework/FacebookAuthProvider/components/FacebookAuthProviderEnums";
import FacebookAuthProviderModels from "./components/Framework/FacebookAuthProvider/components/FacebookAuthProviderModels";
import FacebookAuthProviderExtensions from "./components/Framework/FacebookAuthProvider/components/FacebookAuthProviderExtensions";
import GoogleAuthProvider from "./components/Framework/GoogleAuthProvider/GoogleAuthProviderAuthProvider";
import GoogleAuthProviderConsts from "./components/Framework/GoogleAuthProvider/components/GoogleAuthProviderConsts";
import GoogleAuthProviderEnums from "./components/Framework/GoogleAuthProvider/components/GoogleAuthProviderEnums";
import GoogleAuthProviderModels from "./components/Framework/GoogleAuthProvider/components/GoogleAuthProviderModels";
import GoogleAuthProviderExtensions from "./components/Framework/GoogleAuthProvider/components/GoogleAuthProviderExtensions";
import OktaAuthProvider from "./components/Framework/OktaAuthProvider/OktaAuthProviderAuthProvider";
import OktaAuthProviderConsts from "./components/Framework/OktaAuthProvider/components/OktaAuthProviderConsts";
import OktaAuthProviderEnums from "./components/Framework/OktaAuthProvider/components/OktaAuthProviderEnums";
import OktaAuthProviderModels from "./components/Framework/OktaAuthProvider/components/OktaAuthProviderModels";
import OktaAuthProviderExtensions from "./components/Framework/OktaAuthProvider/components/OktaAuthProviderExtensions";
import IdentityModels from "./components/Framework/Identity/components/IdentityModels";
import IdentityInterfaces from "./components/Framework/Identity/components/IdentityInterfaces";
import IdentityServices from "./components/Framework/Identity/components/IdentityServices";
import IdentityExtensions from "./components/Framework/Identity/components/IdentityExtensions";
import IdentityPackage from "./components/Framework/Identity/IdentityPackage";

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
						sx={{ flex: 1, py: 1, px: 1, bgcolor: "#eaeff1" }}
					>
						<Routes>
							<Route path="/home" element={<Home />} /> 

							<Route path="contents/framework/packages" element={<Framework />} />

							<Route path="contents/framework/packages/shared" element={<Shared />} />
							<Route path="contents/framework/packages/shared/consts" element={<Consts />} />
							<Route path="contents/framework/packages/shared/controllers" element={<Controllers />} />
							<Route path="contents/framework/packages/shared/dto" element={<Dto />} />
							<Route path="contents/framework/packages/shared/entities" element={<Entities />} />
							<Route path="contents/framework/packages/shared/enums" element={<Enums />} />
							<Route path="contents/framework/packages/shared/events" element={<Events />} />
							<Route path="contents/framework/packages/shared/exceptions" element={<Exceptions />} />

							<Route path="contents/framework/packages/shared/extensions" element={<Extensions />} />

							<Route path="contents/framework/packages/shared/interfaces" element={<Interfaces />} />
							<Route path="contents/framework/packages/shared/mapper" element={<Mapper />} />
							<Route path="contents/framework/packages/shared/services" element={<Services />} />

							<Route path="contents/framework/packages/domain" element={<Domain />} />
							<Route path="contents/framework/packages/domain/interfaces" element={<DomainInterfaces />} />

							<Route path="contents/framework/packages/domain/logdbcontext" element={<LogDbContext />} />

							<Route path="contents/framework/packages/domain/services" element={<DomainServices />} />

							<Route path="contents/framework/packages/identityshared" element={<IdentityShared />} />
							<Route path="contents/framework/packages/identityshared/attributes" element={<AttributesIdentityShared />} />
							<Route path="contents/framework/packages/identityshared/dto" element={<DtoIdentityShared />} />
							<Route path="contents/framework/packages/identityshared/exceptions" element={<ExceptionsIdentityShared />} />
							<Route path="contents/framework/packages/identityshared/dbcontext" element={<IdentitySharedDbContext />} />							<Route path="contents/framework/packages/identityshared/interfaces" element={<InterfacesIdentityShared />} />
							<Route path="contents/framework/packages/identityshared/models" element={<ModelsIdentityShared />} />
							<Route path="contents/framework/packages/identityshared/consts" element={<ConstsIdentityShared />} />

							<Route path="contents/framework/packages/applicationcontracts" element={<ApplicationContracts />} />
							<Route path="contents/framework/packages/applicationcontracts/interfaces" element={<InterfacesAppContracts />} />
							<Route path="contents/framework/packages/applicationcontracts/mapper" element={<MapperAppContracts />} />

							<Route path="contents/framework/packages/application" element={<Application />} />
							<Route path="contents/framework/packages/application/services" element={<ServicesApplication />} />
							<Route path="contents/framework/packages/application/mapper" element={<MapperApplication />} />

							<Route path="contents/framework/packages/identityjwttoken" element={<JwtToken />} />
							<Route path="contents/framework/packages/identityjwttoken/interfaces" element={<JwtTokenInterfaces />} />
							<Route path="contents/framework/packages/identityjwttoken/services" element={<JwtTokenServices />} />
							<Route path="contents/framework/packages/identityjwttoken/models" element={<JwtTokenModels />} />
							<Route path="contents/framework/packages/identityjwttoken/middlewares" element={<JwtTokenMiddlewares />} />
							<Route path="contents/framework/packages/identityjwttoken/extensions" element={<JwtTokenExtensions />} />
							<Route path="contents/framework/packages/identityjwttoken/exceptions" element={<JwtTokenExceptions />} />


							<Route path="contents/framework/packages/identityjwtauthprovider" element={<JwtAuthProvider />} />
							<Route path="contents/framework/packages/identityjwtauthprovider/extensions" element={<JwtAuthProviderExtensions />} />

							<Route path="contents/framework/packages/identityappleauthprovider" element={<AppleAuthProvider />} />
							<Route path="contents/framework/packages/identityappleauthprovider/consts" element={<AppleAuthProviderConsts />} />
							<Route path="contents/framework/packages/identityappleauthprovider/enums" element={<AppleAuthProviderEnums />} />
							<Route path="contents/framework/packages/identityappleauthprovider/models" element={<AppleAuthProviderModels />} />
							<Route path="contents/framework/packages/identityappleauthprovider/extensions" element={<AppleAuthProviderExtensions />} />

							<Route path="contents/framework/packages/identityfacebookauthprovider" element={<FacebookAuthProvider />} />
							<Route path="contents/framework/packages/identityfacebookauthprovider/consts" element={<FacebookAuthProviderConsts />} />
							<Route path="contents/framework/packages/identityfacebookauthprovider/enums" element={<FacebookAuthProviderEnums />} />
							<Route path="contents/framework/packages/identityfacebookauthprovider/models" element={<FacebookAuthProviderModels />} />
							<Route path="contents/framework/packages/identityfacebookauthprovider/extensions" element={<FacebookAuthProviderExtensions />} />


							<Route path="contents/framework/packages/identitygoogleauthprovider" element={<GoogleAuthProvider />} />
							<Route path="contents/framework/packages/identitygoogleauthprovider/consts" element={<GoogleAuthProviderConsts />} />
							<Route path="contents/framework/packages/identitygoogleauthprovider/enums" element={<GoogleAuthProviderEnums />} />
							<Route path="contents/framework/packages/identitygoogleauthprovider/models" element={<GoogleAuthProviderModels />} />
							<Route path="contents/framework/packages/identitygoogleauthprovider/extensions" element={<GoogleAuthProviderExtensions />} />


							<Route path="contents/framework/packages/identityoktaauthprovider" element={<OktaAuthProvider />} />
							<Route path="contents/framework/packages/identityoktaauthprovider/consts" element={<OktaAuthProviderConsts />} />
							<Route path="contents/framework/packages/identityoktaauthprovider/enums" element={<OktaAuthProviderEnums />} />
							<Route path="contents/framework/packages/identityoktaauthprovider/models" element={<OktaAuthProviderModels />} />
							<Route path="contents/framework/packages/identityoktaauthprovider/extensions" element={<OktaAuthProviderExtensions/>} />

							<Route path="contents/framework/packages/identity" element={<IdentityPackage />} />
							<Route path="contents/framework/packages/identity/models" element={<IdentityModels />} />
							<Route path="contents/framework/packages/identity/interfaces" element={<IdentityInterfaces />} />
							<Route path="contents/framework/packages/identity/services" element={<IdentityServices />} />
							<Route path="contents/framework/packages/identity/extensions" element={<IdentityExtensions />} />
						
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