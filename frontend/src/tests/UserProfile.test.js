import { render, screen } from '@testing-library/react';
import DisplayProfile from '../components/User/DisplayProfile';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';


describe('DisplayProfile', () => {
  

  test('renders user details correctly', () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      gender: 'Male',
      dob: '01/01/1990',
      mobile: '1234567890',
      qualification: 'Bachelor of Engineering',
      school_clz: 'ABC School',
      specialization: 'Computer Science',
    };

    localStorage.setItem('LoggedInuser', JSON.stringify(user));

    render(<DisplayProfile />);

    expect(screen.getByText(`Name: ${user.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${user.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Date of Birth: ${user.dob}`)).toBeInTheDocument();
    expect(screen.getByText(`Mobile: ${user.mobile}`)).toBeInTheDocument();
    expect(screen.getByText(`Qualification: ${user.qualification}`)).toBeInTheDocument();
    expect(screen.getByText(`School/College: ${user.school_clz}`)).toBeInTheDocument();
    expect(screen.getByText(`Specialization: ${user.specialization}`)).toBeInTheDocument();
  });

  test('handles error while fetching user details', () => {
    localStorage.setItem('LoggedInuser', 'invalid_user_data');

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<DisplayProfile />);

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
