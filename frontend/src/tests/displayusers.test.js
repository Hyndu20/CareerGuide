import { render, screen, waitFor } from '@testing-library/react';
import DisplayUsers from '../components/AdminSlidebarActions';


test('renders DisplayUsers component without crashing', () => {
  render(<DisplayUsers />);
});
