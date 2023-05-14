
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DeleteExperts from '../components/Admin/DeleteExpert';
import * as api from '../actions';

jest.mock('../actions');

describe('<DeleteExperts />', () => {
  test('should delete an expert and remove them from the list', async () => {
    const mockExperts = [
      {
        _id: '1234',
        title: 'Test Title',
        name: 'Test Name',
        designation: 'Test Designation',
        description: 'Test Description',
      },
      {
        _id: '5678',
        title: 'Test Title 2',
        name: 'Test Name 2',
        designation: 'Test Designation 2',
        description: 'Test Description 2',
      },
    ];

    api.AllExperts.mockResolvedValue(mockExperts);
    api.DeleteExpert.mockResolvedValue({ data: { message: 'Expert deleted successfully' } });

    render(<DeleteExperts />);

    await waitFor(() => {
      expect(screen.getByText('Title: Test Title')).toBeInTheDocument();
      expect(screen.getByText('Title: Test Title 2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByText('Delete')[0]);

    await waitFor(() => {
      expect(screen.queryByText('Title: Test Title')).toBeNull();
      expect(screen.getByText('Title: Test Title 2')).toBeInTheDocument();
    });

    expect(api.DeleteExpert).toHaveBeenCalledWith('Test Title');
  });
});
