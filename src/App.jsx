import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu"></Title>
        <Categories categories={categories}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
