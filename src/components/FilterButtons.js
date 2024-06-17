import { Button, ButtonGroup } from "react-bootstrap";
import "./FilterButtons.css";

const FilterButtons = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <ButtonGroup
      className="mb-3 wrap-buttons"
      aria-label="Filter buttons for product category"
    >
      <Button
        variant={selectedCategory === "All" ? "primary" : "outline-primary"}
        size="sm"
        onClick={() => onCategorySelect("All")}
      >
        All
      </Button>
      {categories.map((category, index) => (
        <Button
          key={index}
          variant={
            selectedCategory === category ? "primary" : "outline-primary"
          }
          size="sm"
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
