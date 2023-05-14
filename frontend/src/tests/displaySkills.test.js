// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import DisplaySkills from '../components/Admin/DisplaySkills';
// import '@testing-library/jest-dom';


// describe('DisplaySkills', () => {
//   it('renders the component without crashing', () => {
//     render(<DisplaySkills />);
//     const component = screen.getByText('Top Skills');
//     expect(component).toBeInTheDocument();
//   });

//   it('fetches skills data and renders the correct number of skill cards', async () => {
//     const mockSkills = [
//       {
//         _id: 1,
//         name: 'Skill 1',
//         skills: [{ _id: 1, name: 'Subskill 1' }, { _id: 2, name: 'Subskill 2' }],
//       },
//       {
//         _id: 2,
//         name: 'Skill 2',
//         skills: [{ _id: 3, name: 'Subskill 3' }, { _id: 4, name: 'Subskill 4' }],
//       },
//     ];

//     jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue(mockSkills),
//     });

//     render(<DisplaySkills />);

//     expect(global.fetch).toHaveBeenCalledTimes(0);
//     expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/skills'));

//     await screen.findAllByRole('heading', { level: 4 });

//     const skillCards = screen.getAllByRole('article');

//     expect(skillCards).toHaveLength(mockSkills.length);

//     global.fetch.mockRestore();
//   });
// });
