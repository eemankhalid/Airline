import React from 'react';
import FlightHeader from '../components/FlightHeader';


const AddMeals = () => {
  return (
    <>
      <FlightHeader />
      <div className="meals-container">
        <div className="meal-header">
          <h2>Select meals for your trip</h2>
          <a href="#" className="skip-selection">Skip Meal Selection</a>
        </div>
        <div className="flight-info">
          <span>Karachi to Islamabad</span>
          <span className="flight-icon">✈️</span>
        </div>
      
        <div className="search-sort">
          <input type="text" placeholder="Search for meals" className="search-input" />
          <select className="sort-select">
            <option value="price">Sort By Price</option>
            <option value="price">Sort By Name</option>    
           
          </select>
        </div>
        <div className="meal-categories">
          <button className="category">All Meals</button>
          <button className="category">Hot Breakfast</button>
          <button className="category">Hot Meals</button>
          <button className="category">Sandwiches</button>
          <button className="category">Salad</button>
        </div>
        <div className="meal-items">
          <div className="meal-item">
        
            <div className="meal-description">
              <h3>Pakistani Combo with Water</h3>
              <p>Pakistani Combo with Water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
      
            <div className="meal-description">
              <h3>Regional Breakfast with Water</h3>
              <p>Regional Breakfast with Water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
          
            <div className="meal-description">
              <h3>Chicken Biryani with Potato Cutlet and water</h3>
              <p>Chicken Biryani with Potato Cutlet and water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
           
            <div className="meal-description">
              <h3>Veg Biryani with potato cutlet and water</h3>
              <p>Veg Biryani with potato cutlet and water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
           
            <div className="meal-description">
              <h3>Mix BBQ Platter with water</h3>
              <p>Mix BBQ Platter with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
            
            <div className="meal-description">
              <h3>Chicken Pepporoni Sandwich with water</h3>
              <p>Chicken Pepporoni Sandwich with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
            
            <div className="meal-description">
              <h3>Tandoori Chicken Sandwich in Focaccia Baguette with Water</h3>
              <p>Layers of grilled chicken marinated in tandoori spices, topped with onions and spiced mayonnaise housed in  baguette and&nbsp;water.</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
           
            <div className="meal-description">
              <h3>Veg and Cheese Sandwich with water</h3>
              <p>Veg and Cheese Sandwich with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
            
            <div className="meal-description">
              <h3>Chicken Pepporoni Sandwich with water</h3>
              <p>Chicken Pepporoni Sandwich with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
          
            <div className="meal-description">
              <h3>Fresh Seasonal Fruit Salad with water</h3>
              <p>Fresh Seasonal Fruit Salad with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
            
            <div className="meal-description">
              <h3>Mediterranean Pasta Salad with water</h3>
              <p>Mediterranean Pasta Salad with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          <div className="meal-item">
           
            <div className="meal-description">
              <h3>Roast Chicken with chili with water</h3>
              <p>Roast Chicken with chili with water</p>
            </div>
        
            <div className="meal-price">Free</div>
            <button className="add-meal-button">+ Add This Meal</button>
            
          </div>
          {/* Repeat the .meal-item div for each meal */}
        </div>
      
        <div className="confirm-section">
         
          <button className="confirm-button">Confirm selection</button>
        </div>
      </div>
    </>
  );
};

export default AddMeals;
