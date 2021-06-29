export const ItemDetail = ({ product }) => {
    return(

        <div>
            {
            !!product
              ? product.map((element, index) => {
                return (
                    <span key={index}>
                        <h2>{element.title}</h2>
                        <img src={element.img} alt="Producto" />
                        <p>{element.description}</p>
                        <span>${element.price}</span>
                    </span>
                )
              })
              : 'Loading product...'
          }
        </div>
    )
}