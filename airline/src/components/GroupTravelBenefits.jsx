import React from 'react';

const GroupTravelBenefits = () => {
  return (
    <div className="benefits-container">
      <section>
        <h2 style={{ fontSize: '32px',fontFamily: 'Roboto, sans-serif', textAlign: 'center',whiteSpace: 'nowrap',color:'gray', fontWeight: 'bold',}}>At The Airport</h2>
        <p>Where available, we can take extra care of your group with:</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Advance Check-In</h3>
            <p>Pre-arranged, advance check-in</p>
          </div>
          <div className="benefit-card">
            <h3>Group Check-in Desk</h3>
            <p>Exclusive check-in desks just for your group</p>
          </div>
          <div className="benefit-card">
            <h3>Luggage Tags</h3>
            <p>Group label luggage tags, for easy identification on arrival</p>
          </div>
          <div className="benefit-card">
            <h3>Visa Arrangement</h3>
            <p>We arrange visas to the UAE if members of group require them</p>
          </div>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: '32px',fontFamily: 'Roboto, sans-serif', textAlign: 'center',whiteSpace: 'nowrap',color:'gray', fontWeight: 'bold',}}>On Board</h2>
        <p>During your flight, your group can enjoy benefits such as:</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Group</h3>
            <p>Sitting Together As A Group</p>
          </div>
          <div className="benefit-card">
            <h3>Personalised Menus</h3>
            <p>Personalised menus and headrests with your organisation’s logo</p>
          </div>
          <div className="benefit-card">
            <h3>Onboard Welcome</h3>
            <p>Onboard welcome announcements for your group</p>
          </div>
          <div className="benefit-card">
            <h3>Group's Language</h3>
            <p>Cabin crew who speak your group’s language</p>
          </div>
          <div className="benefit-card">
            <h3>Celebratory Beverages</h3>
            <p>Pre-paid celebratory beverages and chocolates on most routes</p>
          </div>
          <div className="benefit-card">
            <h3>Dietary Meals</h3>
            <p>Meals to meet special religious or dietary requirements</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GroupTravelBenefits;
