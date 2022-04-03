import React from "react";
import "./styles.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import GeneralStats from "../../components/GeneralStats/GeneralStats.js";
import Header from "../../components/Header/Header";
import { format } from "date-fns";

const DemoPage = () => {
	const links = [
		{
			id: 1,
			text: "Pocetna",
			path: "/",
			icon: "fa-solid fa-chart-pie",
			isActive: true,
		},
		{
			id: 2,
			text: "Pacijenti",
			path: "/pacijenti",
			icon: "fa-solid fa-wheelchair",
			dividerAfter: true,
		},
		{
			id: 3,
			text: "Profil",
			path: "/profil",
			icon: "fa-solid fa-user-doctor",
		},
	];

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<div className="sidebar-link-container">
				<Sidebar links={links} />
			</div>

			<Header
				avatarUrl={"nikolaSlika 1.jpg"}
				welcomeMsg={"Dobro jutro"}
				userName={"Dr. Paun"}
				userTitle={"Kardiolog"}
				day={format(new Date(), "d")}
				date={format(new Date(), "d MMMM, yyyy")}
			/>

			<div className="components">
				<GeneralStats
					image={"fa-solid fa-briefcase-medical"}
					text="Zakazani pregledi"
					number="34"
				/>
				<GeneralStats
					image={"fa-solid fa-person-cane"}
					text="Broj pacijenata"
					number="10"
				/>
			</div>
		</>
	);
};

export default DemoPage;
