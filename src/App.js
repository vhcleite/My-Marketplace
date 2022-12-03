const categories = [
  {
    id: 1,
    title: "Hats",
  },
  {
    id: 2,
    title: "Jackets",
  },
  {
    id: 3,
    title: "Sneakers",
  },
  {
    id: 4,
    title: "Womens",
  },
  {
    id: 5,
    title: "Mens",
  },
];

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((c) => {
        return (
          <div className="category-container">
            <div className="category-body-container">
              <h2>{c.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
