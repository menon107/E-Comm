// import React from 'react';
// import { Link } from 'react-router-dom';
// import FilterSidebar from '../components/FilterSidebar';

// function Home() {
//   const handleFilterChange = (filters) => {
//     // Handle filter changes here
//     console.log('Filters changed:', filters);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-3">
//           <FilterSidebar onFilterChange={handleFilterChange} />
//         </div>
//         <div className="col-md-9">
//           <h1 className="text-center mb-5">Welcome to Campus Cart</h1>
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Bakery</h5>
//                   <p className="card-text">Fresh baked goods and pastries.</p>
//                   <Link to="/bakery" className="btn btn-primary">Shop Bakery</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Dairy</h5>
//                   <p className="card-text">Fresh milk, cheese, and other dairy products.</p>
//                   <Link to="/dairy" className="btn btn-primary">Shop Dairy</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Electronics</h5>
//                   <p className="card-text">Gadgets and electronics for students.</p>
//                   <Link to="/electronics" className="btn btn-primary">Shop Electronics</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Beverages</h5>
//                   <p className="card-text">Refreshing drinks and beverages.</p>
//                   <Link to="/beverages" className="btn btn-primary">Shop Beverages</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Fast Food</h5>
//                   <p className="card-text">Quick and delicious meals.</p>
//                   <Link to="/fast-food" className="btn btn-primary">Shop Fast Food</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Poultry</h5>
//                   <p className="card-text">Fresh poultry products.</p>
//                   <Link to="/poultry" className="btn btn-primary">Shop Poultry</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Home.css';

const categories = [
  { title: "Bakery", link: "/bakery", thumbnail: "/images/bakery.jpg" },
  { title: "Dairy", link: "/dairy", thumbnail: "/images/dairy.jpg" },
  { title: "Electronics", link: "/electronics", thumbnail: "/images/electronics.jpg" },
  { title: "Beverages", link: "/beverages", thumbnail: "/images/beverages.jpg" },
  { title: "Fast Food", link: "/fast-food", thumbnail: "/images/fast-food.jpg" },
  { title: "Poultry", link: "/poultry", thumbnail: "/images/poultry.jpg" },
];

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  const firstRow = categories.slice(0, 3);
  const secondRow = categories.slice(3, 6);

  return (
    <div ref={ref} className="home-container">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="categories-container"
      >
        <motion.div className="categories-row">
          {firstRow.map((category) => (
            <ProductCard category={category} translate={translateX} key={category.title} />
          ))}
        </motion.div>
        <motion.div className="categories-row">
          {secondRow.map((category) => (
            <ProductCard category={category} translate={translateXReverse} key={category.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Header() {
  return (
    <div className="hero-section">
      <h1>Welcome to Campus Cart</h1>
      <p>Your one-stop solution for campus essentials</p>
    </div>
  );
}

function ProductCard({ category, translate }) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={category.title}
      className="category-card"
    >
      <Link to={category.link} className="category-link">
        <img
          src={category.thumbnail}
          className="category-image"
          alt={category.title}
        />
      </Link>
      <div className="category-overlay"></div>
      <h2 className="category-title">{category.title}</h2>
    </motion.div>
  );
}

export default Home;