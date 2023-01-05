import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';


describe('Test suite for Dashboard Page', () => {

  it('renders the navbar on the dashboard', () => {
    render(<Dashboard />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  })
  
  it('renders the sidebar on the dashboard', async () => {
    render(<Dashboard />);
    const sideBar = await screen.findByTestId('sidebar');
    expect(sideBar).toBeVisible();
  })
  
  it('renders users data on the dashboard', async () => {
    render(<Dashboard />);
    const usersData = await screen.findByTestId('users-data');
    expect(usersData).toBeVisible();
  })
});
