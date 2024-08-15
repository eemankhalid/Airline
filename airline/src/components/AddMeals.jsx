import React, { useState } from 'react';
import FlightHeader from '../components/FlightHeader';
import AddBaggage from './AddBaggage';

const AddMeals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Meals');
  const [activeComponent, setActiveComponent] = useState('meals');
  const [sortOption, setSortOption] = useState('price'); // default sorting by price

  // Meal data
  const meals = [
    {
      id: 1,
      name: 'Pakistani Combo with Water',
      description: 'Pakistani Combo with Water',
      category: 'Hot Meals',
      price: 'Free',
    },
    {
      id: 2,
      name: 'Regional Breakfast with Water',
      description: 'Regional Breakfast with Water',
      category: 'Hot Breakfast',
      price: 'Free',
    },
    {
      id: 3,
      name: 'Chicken Biryani with Potato Cutlet and water',
      description: 'Chicken Biryani with Potato Cutlet and water',
      category: 'Hot Meals',
      price: '250 Rs',
    },
    {
      id: 4,
      name: 'Veg Biryani with potato cutlet and water',
      description: 'Veg Biryani with potato cutlet and water',
      category: 'Hot Meals',
      price: 'Free',
    },
    {
      id: 5,
      name: 'Mix BBQ Platter with water',
      description: 'Mix BBQ Platter with water',
      category: 'Hot Meals',
      price: 'Free',
    },
    {
      id: 6,
      name: 'Chicken Pepporoni Sandwich with water',
      description: 'Chicken Pepporoni Sandwich with water',
      category: 'Sandwiches',
      price: '300 Rs',
    },
    {
      id: 7,
      name: 'Tandoori Chicken Sandwich in Focaccia Baguette with Water',
      description:
        'Layers of grilled chicken marinated in tandoori spices, topped with onions and spiced mayonnaise housed in a baguette and water.',
      category: 'Sandwiches',
      price: '550 Rs',
    },
    {
      id: 8,
      name: 'Veg and Cheese Sandwich with water',
      description: 'Veg and Cheese Sandwich with water',
      category: 'Sandwiches',
      price: '350 Rs',
    },
    {
      id: 9,
      name: 'Fresh Seasonal Fruit Salad with water',
      description: 'Fresh Seasonal Fruit Salad with water',
      category: 'Salad',
      price: 'Free',
    },
    {
      id: 10,
      name: 'Mediterranean Pasta Salad with water',
      description: 'Mediterranean Pasta Salad with water',
      category: 'Salad',
      price: '440 Rs',
    },
    {
      id: 11,
      name: 'Roast Chicken with chili with water',
      description: 'Roast Chicken with chili with water',
      category: 'Hot Meals',
      price: '630 Rs',
    },
  ];

  // Filter meals based on selected category
  const filteredMeals =
    selectedCategory === 'All Meals'
      ? meals
      : meals.filter((meal) => meal.category === selectedCategory);

  // Function to convert price to number for sorting
  const parsePrice = (price) => {
    if (price === 'Free') return 0;
    return parseInt(price.replace(' Rs', '').replace(/,/g, '')) || 0;
  };

  // Sort meals based on the selected sort option
  const sortedMeals = [...filteredMeals].sort((a, b) => {
    if (sortOption === 'price') {
      return parsePrice(a.price) - parsePrice(b.price);
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const renderComponent = () => {
    switch (activeComponent) {
      case 'add-baggage':
        return <AddBaggage />;
      default:
        return (
          <div className="meals-container">
            <div className="meal-header">
              <h2>Select meals for your trip</h2>
              <a
                href="#"
                className="skip-selection"
                onClick={() => setActiveComponent('add-baggage')}
              >
                Skip Meal Selection
              </a>
            </div>

            <div className="search-sort">
              <select
                className="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="price">Sort By Price</option>
                <option value="name">Sort By Name</option>
              </select>
            </div>
            <div className="meal-categories">
              <button
                className={`category ${
                  selectedCategory === 'All Meals' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('All Meals')}
              >
                All Meals
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Hot Breakfast' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Hot Breakfast')}
              >
                Hot Breakfast
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Hot Meals' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Hot Meals')}
              >
                Hot Meals
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Sandwiches' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Sandwiches')}
              >
                Sandwiches
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Salad' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Salad')}
              >
                Salad
              </button>
            </div>
            <div className="meal-items">
              {sortedMeals.map((meal) => (
                <div className="meal-item" key={meal.id}>
                  <div className="meal-description">
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                  </div>
                  <div className="meal-price">{meal.price}</div>
                  <button className="add-meal-button">+ Add This Meal</button>
                </div>
              ))}
            </div>

            <div className="confirm-section">
              <button
                className="confirm-button"
                onClick={() => setActiveComponent('add-baggage')}
              >
                Confirm selection
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <FlightHeader />
      <br />
      {renderComponent()} {/* Render the active component */}
    </>
  );
};

export default AddMeals;
