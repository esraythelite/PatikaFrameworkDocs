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