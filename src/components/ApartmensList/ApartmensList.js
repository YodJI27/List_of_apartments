import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Creator from "../../redux/reducers/actionCreators";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import Preloader from "../Preloader/Preloader";
import "./ApartmensList.css";

const ApartmensList = () => {
  const dispatch = useDispatch();
  const apper = useSelector((state) => state.Apartmens.apartment);

  useEffect(() => {
    dispatch(Creator()); // eslint-disable-next-line
  }, []); 

  return (
    <section className="ApartmensList">
      {apper.length !== 0 ? (
        <>
          <div className="ApartmensList__container">
            {apper.result.map((item) => {
              return <ApartmentCard item={item} key={item.id} />;
            })}
          </div>
        </>
      ) : (
        <div className="ApartmensList__preloader">
          <Preloader />
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    apartmens: state.Apartmens.apartment,
  };
};

const mapStateToDispatch = { Creator };

export default connect(mapStateToProps, mapStateToDispatch)(ApartmensList);
