
$(document).ready(function(){
    $('#header').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
     });
  });



// <article id="blog-card">
//                         <a href="/product/details.html?p=2" visited="white">
//                     <img id="blog-pic" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg">
//                     <div class ="product-meta">
//                         <h1>Men Black MAMGP T7 Sweat Sporty Jacket</h1>
//                         <h2>Puma</h2>
//                         <p style="color:green">Rs 7999</p>
//                     </div>
//                 </a>
//                 </article>





function createHomePage(obj)
{
  var mainDiv = document.createElement('article');
  mainDiv.classList.add('blog-card');
  
  var productLink = document.createElement('a');
  productLink.href = '/product/details.html? p=' + obj.id;
  
  // var productImage = document.createElement('image');
  productImage.classList.add('blog-pic');
  productImage.src=obj.preview;
  productImage.alt = obj.name + 'pic';
  
  productLink.appendChild(productImage);
  
  var innerDiv = document.createElement('div');
  innerDiv.classList.add('product-meta');


  var productName = document.createElement('h1');
  var productNameText = document.createTextNode(obj.name);
  productName.appendChild(productNameText);


  var productBrand = document.createElement('h2');
  var productBrandText = document.createTextNode(obj.brand);
  productBrand.appendChild(productBrandText);

  
  var productPrice = document.createElement('p');
  var productPriceText = document.createTextNode('Rs ' + obj.price);
  productPrice.appendChild(productPriceText);


  innerDiv.appendChild(productName);
  innerDiv.appendChild(productBrand);
  innerDiv.appendChild(productPrice);

  mainDiv.appendChild(productLink);
  mainDiv.appendChild(innerDiv);
  

  return mainDiv;
  


}



$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (data, status) {
      
     var response = data;
           for (var i = 0; i < response.length; i++) {

          if (response[i].isAccessory) {
           
          $('#accessories-grid').append(createHomePage(response[i]))
                  
           }else {
 
$('#clothing-grid').append(createHomePage(response[i]))
           }
          }
 });