const AboutUs = {

  async render() {
    return `
    <section class="content"> 
    <div class="headline__content">
        <h3 class="headline__title"  tabindex="0">#RestoRasaNusa : Apa itu Resto Rasa Nusa?</h3>
        <p class="headline__description"  tabindex="0">Resto Rasa Nusa adalah katalog yang menyediakan informasi tentang restoran 
           dengan berbagai makanan nusantara dari berbagai daerah yang ada di Indonesia. Saat ini Resto Rasa Nusa sudah 
           bekerja sama dengan banyak restoran  di berbagai cabang di Indonesia. Semua informasi yang ada di Resto Rasa Nusa terpercaya 
           dan merupakan informasi yang sebenar-benarnya. Kami melakukan survey baik dari pelanggan resto yang mengunjungi,maupun para penilai
           professional.

        </p>
       
    </div>
</section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
