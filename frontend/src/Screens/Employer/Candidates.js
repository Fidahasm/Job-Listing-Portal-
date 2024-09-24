import React from 'react';
import './Candidates.css';
import EmployerNavBar from './EmployerNavBar';

const candidates = [
  { name: "Alice Johnson", email: "alice.johnson@example.com", phone: "123-456-7890", position: "Software Engineer", date: "2024-09-01", resume: "resume1.pdf" },
  { name: "Bob Smith", email: "bob.smith@example.com", phone: "234-567-8901", position: "Product Manager", date: "2024-09-02", resume: "resume2.pdf" },
  { name: "Charlie Brown", email: "charlie.brown@example.com", phone: "345-678-9012", position: "Data Scientist", date: "2024-09-03", resume: "resume3.pdf" },
  { name: "Diana Prince", email: "diana.prince@example.com", phone: "456-789-0123", position: "UX Designer", date: "2024-09-04", resume: "resume4.pdf" },
  { name: "Edward Elric", email: "edward.elric@example.com", phone: "567-890-1234", position: "Web Developer", date: "2024-09-05", resume: "resume5.pdf" },
  { name: "Fiona Gallagher", email: "fiona.gallagher@example.com", phone: "678-901-2345", position: "Graphic Designer", date: "2024-09-06", resume: "resume6.pdf" },
  { name: "George Martin", email: "george.martin@example.com", phone: "789-012-3456", position: "Sales Executive", date: "2024-09-07", resume: "resume7.pdf" },
  { name: "Hannah Baker", email: "hannah.baker@example.com", phone: "890-123-4567", position: "HR Specialist", date: "2024-09-08", resume: "resume8.pdf" },
  { name: "Ian Malcolm", email: "ian.malcolm@example.com", phone: "901-234-5678", position: "IT Support", date: "2024-09-09", resume: "resume9.pdf" },
  { name: "Julia Roberts", email: "julia.roberts@example.com", phone: "012-345-6789", position: "Marketing Manager", date: "2024-09-10", resume: "resume10.pdf" },
  { name: "Kevin Spacey", email: "kevin.spacey@example.com", phone: "123-456-7890", position: "Business Analyst", date: "2024-09-11", resume: "resume11.pdf" },
  { name: "Laura Croft", email: "laura.croft@example.com", phone: "234-567-8901", position: "Software Tester", date: "2024-09-12", resume: "resume12.pdf" },
  { name: "Mike Wazowski", email: "mike.wazowski@example.com", phone: "345-678-9012", position: "Network Engineer", date: "2024-09-13", resume: "resume13.pdf" },
 { name: "Diana Prince", email: "diana.prince@example.com", phone: "012-345-6789", position: "Cybersecurity Consultant", date: "2024-09-30", resume: "resume30.pdf" },
];

function Candidates() {
  return (
    <EmployerNavBar>
      <div className="body-main">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Position Applied For</th>
                <th>Date of Application</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.name}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.phone}</td>
                  <td>{candidate.position}</td>
                  <td>{candidate.date}</td>
                  <td><a href={candidate.resume} target="_blank" rel="noopener noreferrer">View Resume</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="nav-content" id='post-job'>Post Job</div>
        <div className="search-icon"><i className='bx bx-search'></i></div>
      </div>
    </EmployerNavBar>
  );
}

export default Candidates;
