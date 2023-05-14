import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddExpert } from '../actions';
import AddExperts from '../components/Admin/AddExpert';

jest.mock('../actions', () => ({
  AddExpert: jest.fn(),
}));

describe('<AddExperts />', () => {
  test('submitting the form calls AddExpert with the correct values', async () => {
    render(<AddExperts />);

    const titleInput = screen.getByLabelText('Title Name:');
    const nameInput = screen.getByLabelText('Name:');
    const designationInput = screen.getByLabelText('Designation:');
    const descriptionInput = screen.getByLabelText('Description:');
    const submitButton = screen.getByRole('button', { name: 'Add Title' });

    fireEvent.change(titleInput, { target: { value: 'a' } });
    fireEvent.change(nameInput, { target: { value: 'd' } });
    fireEvent.change(designationInput, { target: { value: 'u' } });
    fireEvent.change(descriptionInput, { target: { value: 't' } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(AddExpert).toHaveBeenCalledWith({
        title: 'a',
        name: 'd',
        designation: 'u',
        description: 't',
      })
    );
  });
});
