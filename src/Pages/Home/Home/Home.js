import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    // page title
    pageTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <div className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo vel distinctio rem nam culpa veniam, ducimus dolor expedita facere cumque reprehenderit error libero enim voluptatem ex doloremque inventore harum tenetur tempore quaerat doloribus! Suscipit laboriosam quae voluptas voluptatibus, voluptatum dicta vero veritatis repudiandae, accusantium quas delectus error natus ducimus eveniet temporibus, dolore vitae est animi. Quam tempora dolorum voluptatum facere minima! Facere quasi fuga veniam quas, reiciendis numquam hic ab nulla voluptatum doloremque, voluptates autem ducimus voluptas similique modi officiis velit accusantium laboriosam veritatis, tenetur maxime odio ipsam aliquid. Repellat placeat fuga doloribus quod eaque ipsam earum cumque dolor!</div>
        </div>
    );
};

export default Home;