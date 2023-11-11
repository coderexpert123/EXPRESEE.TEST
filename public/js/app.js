const App = () => {
 

    const [products , setproduct] =React.useState([]);
    React.useEffect(()=>{

        fetchProducts();


    },[]);

    const [form,setForm]=React.useState({
        names:"",
        price:""
    });

    function fetchProducts() {
        fetch('/api/products')
          .then((res) => res.json())
          .then(data => {
              setProducts(data);
          });
      }
  
      function handleSubmit(e) {
          e.preventDefault();
          if (!form.names || !form.price) {
              return;
          }
  
          fetch('/api/products', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(form)
          })
          .then(res => res.json())
          .then(data => {
                    console.log(data);
                    fetchProducts(data);

              })
      }
  

      function updateForm(event, field) {
        if (field === 'names') {
            setForm({
                ...form,
                names: event.target.value
            });
        } else if (field === 'price') {
            setForm({
                ...form,
                price: event.target.value
            });
        }
    }

    function fetchProducts(){
        fetch('/api/products')
        .then((res)=>res.json())
        .then(data=>{
            console.log('datais',data); 
             setproduct(data);
             setForm({'names':'','price':''})
        })
    }
    //function for delete product 
    console.log("Product is :",products)
    const deleteProduct = (productId) => {
        console.log(productId);

        fetch(`/api/products/${productId}`, {
            method: 'DELETE' 
        }).then((res) => res.json())
          .then((data) => {
            fetchProducts();
           
        });
  }
 

    return (

<>


 <div className="card">
  <div className="card-header">
        Add Product
  </div>

  <div className="card-body">

    <form onClick={handleSubmit}>


      <input type="text" value={form.names} onChange={ () => updateForm(event,'names')}  className="form-control" placeholder="Product Name"/>
      <input type="text"  value={form.price} onChange={ () => updateForm(event,'price')} className="form-control mt-3" placeholder="Product Price"/>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>

    </form>

  </div>
 
</div>


    <ul className="list-group">
    {
     

     products?.products?.map((product) => (


        <li key={product.id} className="list-group-item d-flex justify-content-between align-item-center">

                    <div>
                        <strong>
                            {product.names}
                        </strong>

                           
                         RS{product.price}
                      


                    </div>

<button className="btn" onClick={ () => deleteProduct(product.id)}>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backpack4" viewBox="0 0 16 16">
  <path d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4Zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5Z"/>
  <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1c0 .52.198.993.523 1.349A.5.5 0 0 0 2 6.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.023-.151c.325-.356.523-.83.523-1.349V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2Zm0 1a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1ZM3 14V6.937c.16.041.327.063.5.063h4v.5a.5.5 0 0 0 1 0V7h4c.173 0 .34-.022.5-.063V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm9.5-11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9Z"/>
</svg>
                        </button>
        </li>
      ))
      
      
      }

    </ul>

    </>
  );
}
 

   //  products.products.map((product) => <li className="list-group-item">{product.id} </li>)
    
 
 

ReactDOM.render(<App />,document.getElementById('app'));

