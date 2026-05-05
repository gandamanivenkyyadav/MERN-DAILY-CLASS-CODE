const Products =()=>{   


 let Products = [{Name:"mobile",price :"50000",Description:"good condition",Rating:"***",imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZTc96kRNhSWx-BK7hw07mGKy5j1MMkCQ_w&s"},
   { Name:"laptop",price :"75000",Description:"good condition",Rating:"***",imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXzJbiwC_dV3uqCTROUa5yfezR38mBvHt6g&s"},
{Name:"cloth",price :"5000",Description:"good condition",Rating:"***",imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFhUMOAY_We3-lu5TopU1kPAWkKwdZHVM6w&s"},
{Name:"mobile",price :"1cr",Description:"good condition",Rating:"***",imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU52l5Tpwe2zRkvl7a2mJdynyHtUtvKjbBGQ&s"},
]
return(
    <>
    <div>
      {
      Products.map(()=>(
        <div>
            <Productscart details={Products}> 
    )
    )


      }

    </div>
    </>
)}