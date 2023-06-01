import React from 'react';
import './Sobre.css';
import sobreimg from './uiuxsobre.jpg';

function Sobre(){
    return (
 <section class="about-section">
  <div class="container-sobre">
    <h2 class="section-title">Sobre UI/UX</h2>
    <div class="content-wrapper">
      <div class="image-container-sobre">
        <img src={sobreimg} alt="Imagem sobre UI/UX" class="image-sobre"/>
      </div>
      <div class="text-container-sobre">
        <p class="text-sobre">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at cursus lectus. Integer rhoncus fermentum lorem, at elementum velit cursus a. In in lacinia lectus, vitae suscipit nisi. Mauris mollis rhoncus quam, vitae consequat felis tempor nec.</p>
      </div>
    </div>
  </div>
</section>
    );
};

export default Sobre;