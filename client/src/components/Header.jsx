const Header = () => {
	return (
		<>
			<nav className="navbar bg-light mb-4 p-0">
				<div className="container">
					<a href="/" className="navbar-brand">
                    <div className="d-flex">

						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gundam_Wing_logo_full.svg/1280px-Gundam_Wing_logo_full.svg.png"
							alt="logo"
                            className="mr-2"
							style={{heigh: "80px", width: "130px"}}
						/>
                        <h5 className="m-auto">Project Track</h5>
                    </div>
					</a>
				</div>
			</nav>
		</>
	);
};

export default Header;
