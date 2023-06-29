import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card p-0" style={{ width: "18rem" }}>
      <img
        src={bizImage}
        className="card-img-top"
        alt={bizName}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{bizName}</h5>
        <p className="cart-text text-center">{bizDescription}</p>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {bizAddress}
          </div>
          <div className="list-group-item">
            <i className="bi bi-telephone-fill me-2"></i>
            {bizPhone}
          </div>
        </ul>

        <div className="links d-flex justify-content-between">
          <Link to={`/my-cards/edit/${_id}`} className="card-link">
            <span className="btn btn-outline-primary">
              <i className="bi bi-pencil-square"></i>
            </span>
          </Link>

          <Link to={`/my-cards/delete/${_id}`} className="card-link">
            <span className="btn btn-outline-danger">
              <i className="bi bi-trash3"></i>
            </span>
          </Link>

          <Link to={`/my-cards/view/${_id}`} className="card-link">
            <span className="btn btn-outline-success">
              <i className="bi bi-eye"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
