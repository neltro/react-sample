import { dashboardService } from '../temp/tmpDashboardService';

async function dashboard(token) {
    return await dashboardService(token);
}

export { dashboard }