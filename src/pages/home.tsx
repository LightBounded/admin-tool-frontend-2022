import { Link } from 'react-router-dom'
import { ReactComponent as PageLinksIcon } from '../assets/home/arrow.svg'
import { ReactComponent as HackathonAnalyticsIcon } from '../assets/home/hackathonAnalyticsIcon.svg'
import CreateHackathonButton from '../components/hackathon/CreateHackathonButton'
import '../components/home/home.css'

export default function Home() {
	// TODO: This user name should be generic.
	let userName: string = 'John'

	const pageLinks = [
		{ route: '/hackathon', buttonText: 'Go to Hackathon' },
		{ route: '/attendees', buttonText: 'Attendees' },
		{ route: '/sponsors', buttonText: 'Sponsors' },
		{ route: '/edit-details', buttonText: 'Edit Details' },
		{ route: '/schedule', buttonText: 'Schedule' },
		{ route: '/settings', buttonText: 'Settings' },
	]

	return (
		<div id="page">
			<div id="page-header">
				<div id="page-header-main">
					<div id="page-header-main-generic-profile-icon" />
					<h1 id="page-header-main-text">Welcome, {userName}.</h1>
				</div>

				<Link to="/analytics">
					<button id="page-header-button">
						<HackathonAnalyticsIcon />
						<p>Hackathon Analytics</p>
					</button>
				</Link>
			</div>

			<h1 className="page-subheader-text" id="page-subheader-1-text">
				Upcoming Hackathon
			</h1>

			<div id="page-links">
				<h1 id="page-links-header">Fall 2022</h1>

				<div id="page-links-grid">
					{pageLinks.map(({ route, buttonText }) => (
						<Link key={route} to={route}>
							<button className="page-links-grid-button">
								<PageLinksIcon className="page-links-grid-button-icon" />
								<p className="page-links-grid-button-text">
									{buttonText}
								</p>
							</button>
						</Link>
					))}
				</div>
			</div>

			<div id="page-subheader-2">
				<h1 className="page-subheader-text">Recent Hackathons</h1>
				<CreateHackathonButton />
			</div>

			{/* TODO: Add Table Component Here */}
		</div>
	)
}
