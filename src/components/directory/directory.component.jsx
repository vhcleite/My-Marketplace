import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Diretory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((c) => {
        return <CategoryItem key={c.id} category={c} />;
      })}
    </div>
  );
};

export default Diretory;
