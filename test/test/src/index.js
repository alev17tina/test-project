{/* <script>
    $(document).ready(function(){
      $('.products-slider').slick({
        setting-name: setting-value
      });
    });
</script> */}
{/* <script type="text/javascript">
    $(document).ready(function(){
      $('.products-slider').slick({
        setting-name: setting-value
      });
    });
</script> */}
<script>
    $('.products-slider').slick({
  infinite: false,
  slidesToShow: 3,  
  slidesToScroll: 3, 
 responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
             }
    }] 
 
});
</script>
{/* <script>
    $('.products-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
</script> */}