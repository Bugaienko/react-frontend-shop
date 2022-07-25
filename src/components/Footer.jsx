function Footer() {
	return (
		<footer className="page-footer blue darken-2" >

			<div className="footer-copyright">
				<div className="container">
					© {new Date().getFullYear()} Sergii Bugaienko
					<a className="right" href="https://github.com/Bugaienko/react-frontend-shop" target="_blank" rel="noreferrer">Repo</a>
				</div>
			</div>
		</footer>
	)
}

export {Footer};