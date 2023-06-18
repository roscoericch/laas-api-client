import { useGetUserQuery, useGetAppsQuery } from '../../services/api';
import { Navigate, Outlet } from 'react-router-dom';
import Sidenav from '../Sidenav';

const DashBoardLayout = () => {
	const token = localStorage.getItem('authToken');
	const userHook = useGetUserQuery(token);
	const appsHook = useGetAppsQuery();

	return (
		<>
			{!token && <Navigate to="/login" />}
			<Sidenav appsHook={appsHook} userHook={userHook} />

			<div className="main">
				<Outlet />
			</div>
		</>
	);
};

export default DashBoardLayout;
