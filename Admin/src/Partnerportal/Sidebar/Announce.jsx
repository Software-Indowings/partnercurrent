import React from 'react';

const announcementData = {
  title: 'New Cloud Products: FAQs',
  content: [
    {
      question: 'How can I get a Pix4Dcloud Advanced trial license?',
      answer: 'There is no specific Pix4Dcloud trial; it is included in the standard Pix4Dmapper trial license. An existing user or someone with a confirmed Pix4D account can have a Pix4Dcloud Advanced trial when they log in using their existing Pix4D account and they click on Start Free trial button. Users without an existing Pix4D account need to go to Pix4Dcloud and they will land on the demo page. They click on the "Start Free Trial" button and click on sign up. They will get an email to confirm the account. Once the account is confirmed, the trial will be created and the user can log in and use the software right away. For internal demo and marketing licenses, please contact laura.lees@pix4d.com.'
    },
    {
      question: 'How many images and projects does Allowance for Pix4Dcloud and Pix4Dcloud Advanced rentals (EXTRA-CLOUD-10K) include?',
      answer: 'EXTRA-CLOUD-10K includes 10 000 images and 80 projects.'
    },
    {
      question: 'Can we sell only Pix4Dcloud and Pix4Dcloud Advanced rentals (EXTRA-CLOUD-10K) or do we need first to sell Pix4Dcloud or Pix4Dcloud Advanced?',
      answer: 'Not specified in the provided context.'
    }
  ]
};

function Announce() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <img src={announcementData.image} alt={announcementData.imageAlt} style={{ width: '100%', marginBottom: '1rem' }} />
      <h1 style={{ marginTop: 0 }}>{announcementData.title}</h1>
      {announcementData.content.map((section, index) => (
        <div key={index}>
          <h2>{section.question}</h2>
          <p>{section.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Announce;