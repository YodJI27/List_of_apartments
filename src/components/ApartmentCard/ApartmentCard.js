import "./ApartmentCard.css";
import image from "../../image/image.jpg";
import { useState } from "react";

const ApartmentCard = ({ item }) => {
  const [like, setLike] = useState(false);

  const handleChangeLike = () => {
    like ? setLike(false) : setLike(true);
  };

  return (
    <section className="ApartmentCard">
      <img src={image} alt="квартира" className="ApartmentCard__image"></img>
      <h2 className="ApartmentCard__title">{item.attributes.title}</h2>
      <ul className="ApartmentCard__list">
        <li className="ApartmentCard__item">{`Адрес: ${item.attributes.address.city}, 
        ул. ${item.attributes.address.street}, дом ${item.attributes.address.house}, кв. ${item.attributes.address.room}`}</li>
        <li className="ApartmentCard__item">{`Комнат: ${item.attributes.rooms}`}</li>
        <li className="ApartmentCard__item">{`Площадь: ${item.attributes.area} ${item.attributes.unit}`}</li>
        <li className="ApartmentCard__item">{`Агент: ${item.relationships.attributes.last_name} ${item.relationships.attributes.first_name} ${item.relationships.attributes.middle_name}`}</li>
      </ul>
      <button
        className={`${
          like
            ? "ApartmentCard__like ApartmentCard__like_active"
            : "ApartmentCard__like"
        }`}
        onClick={handleChangeLike}
      ></button>
    </section>
  );
};

export default ApartmentCard;
