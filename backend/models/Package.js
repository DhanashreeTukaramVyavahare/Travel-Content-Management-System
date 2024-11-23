app.get('/api/admin/packages', (req, res) => {
    const packages = [
      { _id: "1", destination: "Paris", title: "Paris Getaway", description: "A 5-day tour including Eiffel Tower visits.", price: 1500, availableDates: "2024-12-01 to 2024-12-10", maxTravelers: 20, image:"/images/download.png" },
      { _id: "2", destination: "New York", title: "New York City Tour", description: "Explore New York's major attractions with a guided tour.", price: 1200, availableDates: "2024-11-10 to 2024-11-20", maxTravelers: 25, image: "" },
      { _id: "3", destination: "Tokyo", title: "Tokyo Adventure", description: "Discover the beauty of Japan with a visit to Mount Fuji and local temples.", price: 1800, availableDates: "2024-10-05 to 2024-10-15", maxTravelers: 15, image: "https://via.placeholder.com/150/Tokyo" },
      { _id: "4", destination: "London", title: "London Escape", description: "Visit iconic sites like Buckingham Palace and the Tower of London.", price: 1400, availableDates: "2024-11-01 to 2024-11-10", maxTravelers: 30, image: "https://via.placeholder.com/150/London" },
      { _id: "5", destination: "Sydney", title: "Sydney Explorer", description: "A tour through the Sydney Opera House and the Great Barrier Reef.", price: 1700, availableDates: "2024-09-20 to 2024-09-30", maxTravelers: 18, image: "https://via.placeholder.com/150/Sydney" },
      { _id: "6", destination: "Rome", title: "Roman Holiday", description: "Explore ancient Roman ruins, Vatican City, and delicious cuisine.", price: 1600, availableDates: "2024-12-05 to 2024-12-15", maxTravelers: 22, image: "https://via.placeholder.com/150/Rome" },
      { _id: "7", destination: "Dubai", title: "Dubai Luxury Tour", description: "Visit the Burj Khalifa, Dubai Mall, and desert safaris.", price: 2200, availableDates: "2024-08-10 to 2024-08-20", maxTravelers: 30, image: "https://via.placeholder.com/150/Dubai" },
      { _id: "8", destination: "Barcelona", title: "Barcelona Getaway", description: "A trip to the Sagrada Familia and the beaches of Costa Brava.", price: 1500, availableDates: "2024-09-01 to 2024-09-10", maxTravelers: 28, image: "https://via.placeholder.com/150/Barcelona" },
      { _id: "9", destination: "Istanbul", title: "Istanbul Discovery", description: "Explore the rich culture of Istanbul, with a visit to the Blue Mosque and Bosphorus.", price: 1400, availableDates: "2024-07-10 to 2024-07-20", maxTravelers: 25, image: "https://via.placeholder.com/150/Istanbul" },
      { _id: "10", destination: "Amsterdam", title: "Amsterdam Adventure", description: "A boat tour through the canals, visit to Anne Frank House, and local museums.", price: 1300, availableDates: "2024-06-01 to 2024-06-10", maxTravelers: 20, image: "https://via.placeholder.com/150/Amsterdam" },
    ];
  
    res.json(packages);
  });
  