import { Link } from "react-router-dom";

const Item = ({id,img,precio,titulo}) => {
  return (
    <li>
        <Link to={'/item/'+id}>
            <div>
                <picture>
                    <img src={img} alt={img} />
                </picture>
                  <dl>
                      <dd>
                          {precio}
                      </dd>
                      <dt>
                          {titulo}
                      </dt>
                  </dl>
            </div>
        </Link>
    </li>
  )
}

export default Item